import multer from 'multer';

// Multer configuration (store in memory as a buffer)
const storage = multer.memoryStorage(); // Store the file in memory as buffer

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
