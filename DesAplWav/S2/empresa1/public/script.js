// Función para saludar al hacer clic en un botón
function saludar() {
    const mensaje = '¡Hola desde el script!';
  
    // Mostrar el mensaje en un elemento HTML con el id 'saludo'
    const saludoElement = document.getElementById('saludo');
    saludoElement.textContent = mensaje;
  }
  
  // Asignar la función 'saludar' al evento 'click' del botón
  const botonSaludo = document.getElementById('boton-saludo');
  botonSaludo.addEventListener('click', saludar);


//// Servicios
function mostrar1() {
    const mensaje1 = 'Embotellamos agua para el consumo diario';

    const saludoElement1 = document.getElementById('mostrar1');
    saludoElement1.textContent = mensaje1;    
}

const botonMostrar = document.getElementById('boton-mostrar');
botonMostrar.addEventListener('click', mostrar1);


function mostrar2() {
    const mensaje2 = 'Distribución de Agua Potable : Nuestra red de distribución garantiza un suministro confiable de agua potable a comunidades, empresas y organizaciones. Priorizamos la calidad y la puntualidad en cada entrega para garantizar la satisfacción de nuestros clientes.';

    const saludoElement2 = document.getElementById('mostrar2');
    saludoElement2.textContent = mensaje2;
}

const botonMostrar2 = document.getElementById('boton-mostrar2');
botonMostrar2.addEventListener('click', mostrar2);


//confirmacion
function enviarAConfirmacion(event) {
    event.preventDefault();
    window.location.href = "confirmacion.html";
  }
  
  const botonEnviar = document.getElementById("boton-enviar");
  botonEnviar.addEventListener("click", enviarAConfirmacion);
  
