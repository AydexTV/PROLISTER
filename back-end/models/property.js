import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["furnished", "not furnished"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    location: {
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      coordinates: {
        type: [Number], // [latitude, longitude]
        required: true,
      },
    },
    landlord: {
      type: String,
      required: true,
    },
    landlordId: {
      type: String,
      required: true,
    },
    images: {
      type: [String], // Array of image paths
      required: false, // Not required if there might be no images initially
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

export const Property = mongoose.model("Property", propertySchema);
