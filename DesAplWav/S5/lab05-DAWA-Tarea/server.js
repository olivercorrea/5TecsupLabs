const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http); // Importación de la biblioteca Socket.IO y creación de una instancia que se conecta al servidor HTTP
const mysql = require("mysql2");

app.use(express.static("public"));

// Conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "oliverTareadb1",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conexión a la base de datos establecida.");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) { // Evento que se dispara cuando un cliente se conecta
  console.log("Usuario conectado");

  // Recibir un nuevo mensaje y guardarlo en la base de datos
  socket.on("new message", function (data) {
    db.query( // Ejecución de una consulta SQL para insertar el mensaje en la base de datos
      "INSERT INTO messages (username, message, profile_image) VALUES (?, ?, ?)",
      [data.username, data.message, data.profile_image],
      function (err, result) {
        if (err) throw err;
        io.emit("message received", { // Envío del mensaje recibido a todos los clientes conectados
          username: data.username,
          message: data.message,
          profile_image: data.profile_image,
          created_at: new Date(), // Fecha y hora de creación del mensaje
        });
      }
    );
  });

  socket.on("disconnect", function () { // Evento que se dispara cuando un cliente se desconecta
    console.log("Usuario desconectado");
  });
});

http.listen(3000, function () {
  console.log("Servidor escuchando en http://localhost:3000");
});
