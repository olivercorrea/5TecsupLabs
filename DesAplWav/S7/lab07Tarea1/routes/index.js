const express = require('express');
const router = express.Router();
const path = require('path');

// Maneja la ruta principal
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/formulario.html'));
});

module.exports = router;
