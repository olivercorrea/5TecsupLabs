var http = require('http');

var manejador = function(solicitud,respuesta){
    var i = 0;

    while(i <= 12) {
        respuesta.write(i + '-->');
        i++;
    }

    respuesta.end();

};

var servidor = http.createServer(manejador);

servidor.listen(8080);

