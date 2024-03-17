
const readline = require('readline'); // Para importar el modulo

console.log('Bienvenido, con este programa podra cambiar sus dolares de forma segura a euros.');
console.log();

console.log('1 $ = 0.85 €');

// Creamos una interfaz readline para la entrada estándar
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cambio = 0.85;
let resultado;

rl.question('Ingrese el cantidad deseada: ', (cDolares) => {
    console.log('Cantidad ingresada: ', cDolares);

    if (cDolares >= 0 && !Number.isInteger(cDolares)) {
        resultado = cDolares * cambio;
        console.log('Sus dolares quivalen a: ', resultado);
    } else {
        console.log('¡Ingrese un dato valido!');
        console.log('Ingrese un valor entero mayor a 0.');
    }
    
    rl.close();
})




