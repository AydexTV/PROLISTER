import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js"
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({extended: false}));

app.use("/uploads", express.static("uploads"));

const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin (your frontend)
  optionsSuccessStatus: 200, // Some browsers require a status of 200 for success
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/application", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Bismillah");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
