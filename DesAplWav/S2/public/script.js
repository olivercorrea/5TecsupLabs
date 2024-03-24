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