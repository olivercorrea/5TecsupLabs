const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
  dest: "uploads/",

  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB máximo

  fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
}); // Directorio donde se guardarán los archivos adjuntos

app.post("/upload", upload.array("files", 5), (req, res) => {
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

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
