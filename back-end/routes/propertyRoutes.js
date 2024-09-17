import express from "express";
import { Property } from "../models/property.js";
import upload from "../middleware/upload.js"; // Import multer setup
import cloudinary from "../middleware/cloudinaryConfig.js"; // Import Cloudinary config

const router = express.Router();

router.post("/", upload.array("images", 5), async (req, res) => {
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
      landlordId,
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
      !landlord ||
      !landlordId
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

    // Upload images to Cloudinary and get the URLs
    const uploadedImages = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) {
          throw new Error("Cloudinary Upload Error: " + error.message);
        }
        return result.secure_url; // Get secure Cloudinary URL
      }).end(file.buffer); // Pass the file buffer to Cloudinary
      uploadedImages.push(result.secure_url); // Save the image URL
    }

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
      landlordId,
      images: uploadedImages, // Add the Cloudinary URLs to the property
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
