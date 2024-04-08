const http = require('http');
const url = require('url');
const calcularDiasFaltantes = require('./dias');

const server = http.createServer((req, res) => {
    const urlParseada = url.parse(req.url, true);
    const ruta = urlParseada.pathname;
    const parametros = urlParseada.query;

    if (ruta === '/dias') {
        const fecha = parametros.fecha;
        if (!fecha) {
            res.writeHead(400);
            res.end('Error: Debes ingresar una fecha en la URL');
        } else {
            const diasFaltantes = calcularDiasFaltantes(fecha);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Dias faltantes para ${fecha}: ${diasFaltantes}`);
        }
    } else {
        res.writeHead(404);
        res.end('Página no encontrada');
    }
});

server.listen(8080, () => {
    console.log('Servidor web en funcionamiento en el puerto 8080');
});
