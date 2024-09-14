import express from "express";
import { Application } from "../models/application.js";

const router = express.Router();

router.post("/apply", async (req, res) => {
  const { userName, userEmail, propertyId, landlordId } = req.body;

  try {
    const newApplication = {
      applicantName: userName,
      applicantEmail: userEmail,
      propertyId,
      landlordId, 
    };

    const application = await Application.create(newApplication);

    return res.json(application);
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

router.get("/landlord/:landlordId", async (req, res) => {
  const { landlordId } = req.params;

  try {
    // Fetch all applications where landlordId matches the provided id
    const applications = await Application.find({ landlordId });
    res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
