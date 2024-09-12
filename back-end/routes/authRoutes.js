import express from "express";
import { User } from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    // check if password entered and if it is long enough
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 letters long",
      });
    }

    // check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "E-mail already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    const user = await User.create(newUser);

    return res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "E-mail Not Found",
      });
    }

    // check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
        if(err) throw err;
        res.cookie("token", token).json(user)
      })
    } else {
        return res.json({
            error: "Wrong Password",
          });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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

    // Send the user data if token is valid
    res.json(user);
  });
});

export default router;
