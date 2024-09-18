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
      console.log("Missing fields: ", req.body);
      return res.status(400).send({
        message: "Please provide all required fields",
      });
    }

    if (req.files.length > 5) {
      console.log("Too many images: ", req.files.length);
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
      try {
        const result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: "properties" }, (error, result) => {
            if (error) {
              console.log("Cloudinary error: ", error);
              reject(error);
            } else {
              resolve(result);
            }
          }).end(file.buffer); // Upload the file buffer directly
        });
        uploadedImages.push(result.secure_url); // Save the Cloudinary URL
      } catch (error) {
        console.log("Error uploading image: ", error.message);
        return res.status(500).send({ message: "Error uploading image to Cloudinary" });
      }
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
    console.log("Server error: ", error.message);
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
