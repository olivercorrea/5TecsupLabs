const express = require("express");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const path = require("path");

AWS.config.update({ region: "us-east-2" });

const app = express();
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Tasks";

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configurar la carpeta pública para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rutas
const taskRoutes = require("./routes/tasks");
app.use("/", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
