const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mysql = require('mysql2');

app.use(express.static('public'));

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'oliverTareadb1'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida.');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('Usuario conectado');

  // Recibir un nuevo mensaje y guardarlo en la base de datos
  socket.on('new message', function(data) {
    db.query('INSERT INTO messages (username, message, profile_image) VALUES (?, ?, ?)', [data.username, data.message, data.profile_image], function(err, result) {
      if (err) throw err;
      io.emit('message received', { username: data.username, message: data.message, profile_image: data.profile_image, created_at: new Date() });
    });
  });
  
  socket.on('disconnect', function () {
    console.log('Usuario desconectado');
  });
});

http.listen(3000, function () {
  console.log('Servidor escuchando en http://localhost:3000');
});
