import multer from "multer";
import path from "path";

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/property_images"); // Destination directory
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for the image
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Please upload only images"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    files: 5, // Maximum number of files
    fileSize: 5 * 1024 * 1024, // Maximum file size (5 MB)
  },
});

export default upload;
