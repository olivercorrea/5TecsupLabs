const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('./horas.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/horas.js') {
        fs.readFile('./horas.js', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Página no encontrada');
    }
});

server.listen(8080, () => {
    console.log('Servidor web en funcionamiento en el puerto 8080');
});

