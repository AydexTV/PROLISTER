import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import propertyRoutes from "./routes/propertyRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use environment variables
const PORT = process.env.PORT || 3000;
const mongoDBURL = process.env.mongoDBURL;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

// Set up CORS to allow requests from your frontend
const corsOptions = {
  origin: FRONTEND_URL, // Your actual frontend URL
  optionsSuccessStatus: 200,
  credentials: true, // Allow cookies and other credentials
};
app.use(cors(corsOptions));

// Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/application", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Bismillah");
});

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
