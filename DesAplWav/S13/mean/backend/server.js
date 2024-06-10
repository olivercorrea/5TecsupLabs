const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const itemController = require("./controllers/itemController");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/musicapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.log("Error al conectar a MongoDB:", error);
  });

// Configuración de Multer para manejo de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Servir archivos estáticos desde la carpeta 'uploads'
app.use("/uploads", express.static("uploads"));

// Ruta para subir imágenes
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No se subió ningún archivo.");
  }
  res.json({
    imageUrl: `http://localhost:${port}/uploads/${req.file.filename}`,
  });
});

app.get("/api/items", itemController.getItems);
app.get("/api/items/:id", itemController.getItemById);
app.post("/api/items", itemController.createItem);
app.put("/api/items/:id", itemController.updateItem);
app.delete("/api/items/:id", itemController.deleteItem);

app.listen(port, () => {
  console.log("Servidor backend en funcionamiento en el puerto", port);
});
