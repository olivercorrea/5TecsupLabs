var socket = io();
        
function enviarMensaje() {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    var profileImage = document.getElementById('profileImage').value;
    socket.emit('new message', { username: username, message: message, profile_image: profileImage });
    document.getElementById('message').value = '';
    return false;
}

socket.on('message received', function(data) {
    var listaMensajes = document.getElementById('lista-mensajes');
    var mensaje = document.createElement('li');
    mensaje.className = 'flex items-center mb-2';

    // Agregar imagen de perfil
    var img = document.createElement('img');
    img.src = data.profile_image;
    img.alt = 'Perfil';
    img.className = 'w-8 h-8 rounded-full mr-2';
    
    // Agregar el contenido del mensaje
    var content = document.createTextNode(`${data.username} (${new Date(data.created_at).toLocaleTimeString()}): ${data.message}`);
    
    // Añadir imagen y texto al elemento de lista
    mensaje.appendChild(img);
    mensaje.appendChild(content);

    // Determinar el estilo de alineación del mensaje
    if (data.username === document.getElementById('username').value) {
        // Si el mensaje es del usuario actual, alinear a la derecha
        mensaje.style.justifyContent = 'flex-end';
    } else {
        // Si el mensaje es de otro usuario, alinear a la izquierda
        mensaje.style.justifyContent = 'flex-start';
    }

    listaMensajes.appendChild(mensaje);
});
