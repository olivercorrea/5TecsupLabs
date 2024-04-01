var http = require('http'),
    fs = require('fs');

var parametros = [],
    valores = [];

http.createServer(function(req, res) {
    fs.readFile('./form.html', function(err, html) {
        if (err) {
            console.error(err); // Handle file reading error
            return;
        }

        var html_string = html.toString();

        if (req.url.indexOf('?') > 0) {
            var url_data = req.url.split('?');
            var arreglo_parametros = url_data[1].split('&');
        }

        for (var i = 0; i < (arreglo_parametros || []).length; i++) { // Handle cases where arreglo_parametros is not defined
            if (!arreglo_parametros) {
                break; // Exit the loop if there are no parameters
            }
            var parametro = arreglo_parametros[i];
            var param_data = parametro.split('=');
            parametros[i] = param_data[0];
            valores[i] = param_data[1];
        }

        for (var i = 0; i < parametros.length; i++) {
            html_string = html_string.replace('{' + parametros[i] + '}', valores[i]);
        }

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();

        // Imprimir valores de las variables al finalizar la ejecución
        console.log("arreglo_parametros:", arreglo_parametros);
        console.log("parametros:", parametros);
        console.log("valores:", valores);

    });
}).listen(8080);


