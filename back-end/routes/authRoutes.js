import express from "express";
import { User } from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if name is entered
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    // Check if password is entered and if it is long enough
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 letters long",
      });
    }

    // Check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "E-mail already exists",
      });
    }

    // Hash the password and create a new user
    const hashedPassword = await hashPassword(password);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    const user = await User.create(newUser);

    // Return the newly created user (excluding password)
    return res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "E-mail not found",
      });
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          
          // Set the token in an httpOnly cookie
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production", // Use secure cookies in production
              sameSite: "strict",
            })
            .json({
              id: user._id,
              name: user.name,
              email: user.email,
            });
        }
      );
    } else {
      return res.status(400).json({
        error: "Wrong password",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Profile Route
router.get("/profile", (req, res) => {
  const { token } = req.cookies;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify JWT token
  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    // Send the user data if token is valid (excluding sensitive data)
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });
});

// Logout Route
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.json({ message: "Logged out successfully" });
});

export default router;
