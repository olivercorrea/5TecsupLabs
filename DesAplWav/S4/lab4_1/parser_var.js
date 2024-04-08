
function parse_vars(req){
    var arreglo_parametros = [];
    var parametros = [];
    var valores = [];
    if(req.url.indexOf('?')>0){
        var url_data = req.url.split('?');
        arreglo_parametros = url_data[1].split('&');
    }
    
    for(i=0;i<arreglo_parametros.length;i++){
        var parametro = arreglo_parametros[i]; 
        var param_data = parametro.split('='); 
        parametros [i] = param_data[0]; 
        valores[i] = param_data[1];
    }
    
    return {
        parametros: parametros, 
        valores: valores
    }
}

module.exports.parse_vars = parse_vars;

module.exports.batman = {
    identidad: 'bruce Wayne',
    poder: 'Dinero'
};
