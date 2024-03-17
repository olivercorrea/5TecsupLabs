var http = require('http');

var manejador = function(solicitud, respuesta) {
    //console.log('Hola mundo!');
    
    console.log('Conexion entrante');
    respuesta.end('Hola mundo!')
    
};

var servidor = http.createServer(manejador);

servidor.listen(8080);