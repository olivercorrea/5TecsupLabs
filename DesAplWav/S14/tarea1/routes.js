// routes.js
const express = require("express");
const router = express.Router();
const upload = require("./middleware/multer");

router.post("/upload", upload.array("files", 5), (req, res) => {
  if (!req.files) {
    return res.status(400).send("No se ha seleccionado ningún archivo.");
  }

  const fileInfos = req.files.map((file) => {
    return {
      filename: file.filename,
      originalname: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    };
  });

  res.json(fileInfos);
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

module.exports = router;