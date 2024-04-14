document.getElementById('addForm').onsubmit = function(event) {
    event.preventDefault();
    const tarea = {
        nombre_tarea: document.getElementById('nombre_tarea').value,
        encargado_tarea: document.getElementById('encargado_tarea').value,
        fecha_entrega_tarea: document.getElementById('fecha_entrega_tarea').value,
        estado_tarea: document.getElementById('estado_tarea').value
    };
    fetch('/tareas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarea)
    }).then(response => response.text()).then(data => {
        alert(data);
        cargarTareas();
    });
};

function cargarTareas() {
    fetch('/tareas')
        .then(response => response.json())
        .then(data => {
            const tareasContainer = document.getElementById('tareas');
            tareasContainer.innerHTML = '';

            // Crear la tabla
            const table = document.createElement('table');
            table.classList.add('table', 'table-bordered', 'w-full');

            // Crear el encabezado de la tabla
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Encargado</th>
                <th class="px-4 py-2">Fecha Entrega</th>
                <th class="px-4 py-2">Estado</th>
                <th class="px-4 py-2">Acciones</th>
            `;
            table.appendChild(headerRow);

            // Agregar filas de tareas a la tabla
            data.forEach(tarea => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-4 py-2">${tarea.nombre_tarea}</td>
                    <td class="px-4 py-2">${tarea.encargado_tarea}</td>
                    <td class="px-4 py-2">${tarea.fecha_entrega_tarea}</td>
                    <td class="px-4 py-2">${tarea.estado_tarea}</td>
                    <td class="px-4 py-2">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onclick="editarTarea(${tarea.id_tarea})">Editar</button>
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onclick="borrarTarea(${tarea.id_tarea})">Borrar</button>
                    </td>
                `;
                table.appendChild(row);
            });

            // Agregar la tabla al contenedor de tareas
            tareasContainer.appendChild(table);
        })
        .catch(error => console.error('Error al cargar las tareas:', error));
}


function editarTarea(id) {
    const nombre = prompt("Ingrese el nuevo nombre de la tarea:");
    const encargado = prompt("Ingrese el nuevo encargado de la tarea:");
    const fecha = prompt("Ingrese la nueva fecha de entrega:");
    const estado = prompt("Ingrese el nuevo estado de la tarea:");
    fetch(`/tareas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_tarea: nombre, encargado_tarea: encargado, fecha_entrega_tarea: fecha, estado_tarea: estado })
    }).then(response => response.text()).then(data => {
        alert(data);
        cargarTareas();
    });
}

function borrarTarea(id) {
    if (confirm("¿Está seguro de que desea eliminar esta tarea?")) {
        fetch(`/tareas/${id}`, {
            method: 'DELETE'
        }).then(response => response.text()).then(data => {
            alert(data);
            cargarTareas();
        });
    }
}

// Cargar tareas al iniciar
cargarTareas();
