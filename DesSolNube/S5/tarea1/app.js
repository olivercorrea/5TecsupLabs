const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'oliverTareadb1'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Rutas para el CRUD
app.get('/tareas', (req, res) => {
    db.query('SELECT * FROM tareas', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/tareas', (req, res) => {
    let tarea = req.body;
    let sql = 'INSERT INTO tareas SET ?';
    db.query(sql, tarea, (err, result) => {
        if (err) throw err;
        res.send('Tarea agregada');
    });
});

app.put('/tareas/:id', (req, res) => {
    let sql = `UPDATE tareas SET ? WHERE id_tarea = ${req.params.id}`;
    db.query(sql, req.body, (err, result) => {
        if (err) throw err;
        res.send('Tarea actualizada');
    });
});

app.delete('/tareas/:id', (req, res) => {
    let sql = `DELETE FROM tareas WHERE id_tarea = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Tarea eliminada');
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
