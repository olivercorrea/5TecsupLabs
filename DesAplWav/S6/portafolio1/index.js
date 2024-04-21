const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: 'Oliver' });
});

app.get('/Portafolio/:username', (req, res) => {

    const username = req.params.username;
  
    res.render('portafolio', { username: username });
  
  });
  
  
  app.get('/Portafolio/:username/habilidades', (req, res) => {
  
    const username = req.params.username;
  
    res.render('habilidades', { username: username });
  
  });
    
  app.get('/Portafolio/:username/contactame', (req, res) => {
  
    const username = req.params.username;
  
    res.render('contactame', { username: username });
  
  });

app.listen(port, () => {
  console.log(`Puerto ${port}!`);
});