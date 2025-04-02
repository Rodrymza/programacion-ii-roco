// Función para mostrar el detalle de la obra social en el modal
const botonBuscar = document.getElementById('btn-buscar');

botonBuscar.addEventListener('click', function () {
    // Obtener el valor del input de búsqueda
    const inputBuscar = document.getElementById('buscador');
    const valorBuscar = inputBuscar.value.trim();

})

function mostrarDetalle(nombreObra) {
    // Aquí puedes asignar los detalles específicos de la obra social.
    // Por ejemplo, si se tiene una base de datos o un array con los detalles de las obras sociales,
    // podrías cargar esos detalles aquí.

    // Como ejemplo, solo mostramos el nombre de la obra social en el textarea.
    document.getElementById('notaDetalle').value = 'Detalles de la obra social: ' + nombreObra;
}

// Función para habilitar la edición del textarea
function habilitarEdicion() {
    var textarea = document.getElementById('notaDetalle');
    var editarBtn = document.getElementById('editarBtn');

    // Habilitar el textarea para edición
    textarea.readOnly = false;
    // Cambiar el texto del botón a "Guardar"
    editarBtn.textContent = 'Cancelar';
    // Cambiar la acción del botón para cancelar
    editarBtn.setAttribute('onclick', 'cancelarEdicion()');
}

// Función para cancelar la edición (restaurar el botón a "Editar")
function cancelarEdicion() {
    var textarea = document.getElementById('notaDetalle');
    var editarBtn = document.getElementById('editarBtn');

    // Deshabilitar el textarea
    textarea.readOnly = true;
    // Restaurar el texto original del botón
    editarBtn.textContent = 'Editar';
    // Cambiar la acción del botón para habilitar edición nuevamente
    editarBtn.setAttribute('onclick', 'habilitarEdicion()');
}

// Función para guardar los detalles editados
function guardarDetalles() {
    var detalles = document.getElementById('notaDetalle').value;
    alert('Detalles guardados: ' + detalles);
    // Aquí puedes hacer que los detalles se guarden, por ejemplo, en una base de datos
    // o en el almacenamiento local si es una aplicación estática.
}


