import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import propertyRoutes from './routes/propertyRoutes.js';
import cors from "cors";

const app = express();

app.use(express.json());

app.use('/uploads', express.static('uploads'));

const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin (your frontend)
  optionsSuccessStatus: 200, // Some browsers require a status of 200 for success
};

app.use(cors(corsOptions));

app.use("/api/properties", propertyRoutes);

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
