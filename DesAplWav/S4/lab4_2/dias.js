function calcularDiasFaltantes(fecha) {
    const fechaActual = new Date();
    const fechaIngresada = new Date(fecha);

    fechaActual.setHours(0, 0, 0, 0);
    fechaIngresada.setHours(0, 0, 0, 0);

    const diferenciaMilisegundos = fechaIngresada - fechaActual;

    const diasFaltantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return diasFaltantes;
}

module.exports = calcularDiasFaltantes;
