const mysql = require("mysql2");
const express = require("express");

const app = express();
const port = 3000;

// Configurar Pug como motor de plantillas
app.set("view engine", "pug");
app.set("views", "./views");

// Configurar express.js para servir archivos estáticos desde la carpeta public
app.use(express.static("public"));

// Midleware para procesar datos enviados en formularios
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get("/", (req, res) => {
  // realizar consulta a la base de datos
  connection.query("SELECT * FROM alumnos", (error, resultados) => {
    if (error) {
      console.log(error);
      return;
    }
    // renderizar la vista y pasar los resultados
    res.render("index", { datos: resultados });
  });
});

// Manejar la solicitud POST para agregar datos
app.post("/", (req, res) => {
  const nuevoDato = req.body.nuevoDato;
  // Aquí puedes agregar el código para insertar el nuevo dato en la base de datos

  // Consulta SQL de inserción
  const consulta = "INSERT INTO alumnos (columna1) VALUES (?)";

  // Ejecutar la consulta de inserción
  connection.query(consulta, [nuevoDato], (error, results) => {
    if (error) {
      console.error("Error al insertar datos: ", error);
      return;
    }

    console.log("Dato insertado exitosamente");
    res.redirect("/");
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "oliverTareadb1",
});

// Conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a MySQL: ", error);
    return;
  }

  console.log("Conexión exitosa a MySQL");
});

// Ejecutar una consulta SELECT
connection.query("SELECT * FROM alumnos", (error, results) => {
  if (error) {
    console.error("Error al ejecutar la consulta: ", error);
    return;
  }
  console.log("Resultados de la consulta: ", results);
});

// Cerrar la conexión cuando sea necesario
// connection.end();

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'oliver1234';
