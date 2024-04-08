function obtenerHoraActual() {
    return new Date();
}

function obtenerHoraFormato24() {
    const horaActual = obtenerHoraActual();
    const horas = horaActual.getHours().toString().padStart(2, '0');
    const minutos = horaActual.getMinutes().toString().padStart(2, '0');
    const segundos = horaActual.getSeconds().toString().padStart(2, '0');
    return ${horas}:${minutos}:${segundos};
}

function obtenerHoraFormato12() {
    const horaActual = obtenerHoraActual();
    let horas = horaActual.getHours();
    const minutos = horaActual.getMinutes().toString().padStart(2, '0');
    const segundos = horaActual.getSeconds().toString().padStart(2, '0');
    const amPm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12 || 12;
    return ${horas}:${minutos}:${segundos} ${amPm};
}

module.exports = {
    obtenerHoraFormato24,
    obtenerHoraFormato12
};
