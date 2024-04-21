const express = require('express');
const app = express();
const yargs = require('yargs');
const colors = require('colors');

app.set('view engine', 'ejs');

app.get('/multiplicar/:id(\\d+)', (req, res) => {
  const id = parseInt(req.params.id);
  const table = generateTable(id);
  res.render('table', { table: table, title: `Tabla del ${id}` });
});

const args = yargs
  .option('base', {
    alias: 'b',
    description: 'Base de la tabla de multiplicar',
    type: 'number',
    default: 1,
  })
  .option('limit', {
    alias: 'l',
    description: 'Límite de la tabla de multiplicar',
    type: 'number',
    default: 10,
  }).argv;

app.listen(3000, () => {
  console.log(`Server running on port 3000`.green);
  if (args.listar) {
    console.log(`Tabla de multiplicar de ${args.base} hasta ${args.limit}`.blue);
  }
});

function generateTable(id) {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `${id} x ${i} = ${id * i}\n`;
  }
  return table;
}
