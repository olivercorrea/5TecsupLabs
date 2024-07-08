// middleware/multer.js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${getExtension(file.mimetype)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("El archivo no es válido"), false);
  }
};

const sizeLimit = 5 * 1024 * 1024; // 5MB

const multerConfig = multer({
  storage,
  fileFilter,
  limits: { fileSize: sizeLimit },
});

module.exports = multerConfig;

function getExtension(mimetype) {
  const parts = mimetype.split("/");
  return parts[parts.length - 1];
}