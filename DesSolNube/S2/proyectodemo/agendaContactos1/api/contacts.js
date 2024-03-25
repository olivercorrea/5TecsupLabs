const { Pool } = require('pg');
const express = require('express');
const router = express.Router();

const pool = new Pool({
    user: 'default',
    host: 'ep-yellow-unit-a4fqhur9-pooler.us-east-1.aws.neon.tech',
    database: 'verceldb',
    password: 'V1QCTeap8wsz',
    port: 5432,
});

// Obtener todos los contactos
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts');
        res.json(result.rows);
    } catch (err) {
        console.error('Error al obtener los contactos:', err);
        res.status(500).json({ error: 'Error al obtener los contactos' });
    }
});

// Agregar un nuevo contacto
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const result = await pool.query('INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3) RETURNING *', [name, email, phone]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error al agregar un contacto:', err);
        res.status(500).json({ error: 'Error al agregar un contacto' });
    }
});

// Actualizar un contacto
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;
    try {
        const result = await pool.query('UPDATE contacts SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *', [name, email, phone, id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error al actualizar un contacto:', err);
        res.status(500).json({ error: 'Error al actualizar un contacto' });
    }
});

// Eliminar un contacto
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
        res.json({ message: 'Contacto eliminado exitosamente' });
    } catch (err) {
        console.error('Error al eliminar un contacto:', err);
        res.status(500).json({ error: 'Error al eliminar un contacto' });
    }
});

module.exports = router;
