import express from "express";
import { Property } from "../models/property.js";
import upload from "../middleware/upload.js"; // Import multer setup

const router = express.Router();

router.post("/", upload.array("images", 5), async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const {
      title,
      description,
      type,
      price,
      rooms,
      bathrooms,
      area,
      country,
      city,
      latitude,
      longitude,
      landlord,
    } = req.body;

    if (
      !title ||
      !description ||
      !type ||
      !price ||
      !rooms ||
      !bathrooms ||
      !area ||
      !country ||
      !city ||
      !latitude ||
      !longitude ||
      !landlord
    ) {
      return res.status(400).send({
        message: "Please provide all required fields",
      });
    }

    if (req.files.length > 5) {
      return res.status(400).send({ message: "Maximum 5 images are allowed" });
    }

    const coordinates = [latitude, longitude];

    const location = {
      country,
      city,
      coordinates,
    };

    const imagePaths = req.files.map((file) => file.path); // Get the paths of uploaded images

    const newProperty = {
      title,
      description,
      type,
      price,
      rooms,
      bathrooms,
      area,
      location,
      landlord,
      images: imagePaths, // Add image paths to the property
    };

    const property = await Property.create(newProperty);

    return res.status(201).send(property);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
