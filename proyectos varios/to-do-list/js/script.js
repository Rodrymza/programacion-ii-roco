document.addEventListener("DOMContentLoaded", function () {
    const listaTareas = document.getElementById("lista-tareas");
    const inputNuevaTarea = document.getElementById("nueva-tarea");
    const btnAgregarTarea = document.getElementById("agregar-tarea");
    
    document.querySelectorAll(".eliminar-tarea").forEach(btn => {
        btn.addEventListener("click", function () {
            btn.parentElement.remove();
        });
        
    });

    function agregarTarea(texto) {
        if (texto.trim() === "") return;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const div = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        
        const textoTarea = document.createTextNode(texto);
        div.appendChild(checkbox);
        div.appendChild(textoTarea);

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-danger btn-sm eliminar-tarea";
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(div);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    }

    btnAgregarTarea.addEventListener("click", function () {
        agregarTarea(inputNuevaTarea.value);
        inputNuevaTarea.value = "";
    });

    inputNuevaTarea.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            agregarTarea(inputNuevaTarea.value);
            inputNuevaTarea.value = "";
        }
    });
});
