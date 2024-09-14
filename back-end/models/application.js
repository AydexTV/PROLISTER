import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  applicantName: {
    type: String,
    required: true,
  },
  applicantEmail: {
    type: String, // Fix typo here
    required: true,
  },
  propertyId: {
    type: String,
    required: true,
  },
  landlordId: {
    type: String,
    required: true,
  },
});

export const Application = mongoose.model("Application", applicationSchema);
