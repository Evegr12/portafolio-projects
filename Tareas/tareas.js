let tareas = ["Ir al gym", "comprar despensa", "Ordenar cuarto"];

for (let i = 0; i < tareas.length; i++) {
    console.log(tareas[i]);
    
}

function agregarTarea(tarea) {
    tareas.push(tarea);
    console.log("Tarea agregada:", tarea);
    console.log("Lista actualizada de tareas:", tareas);
}

agregarTarea("Estudiar JavaScript");


function eliminarTarea(tarea){
    const index = tareas.indexOf(tarea);
    if (index === -1) {
        console.log("Tarea no encontrada:", tarea);
        return;
    }   
    tareas.splice(index, 1);
    console.log("Tarea eliminada:", tarea);
    console.log("Lista actualizada de tareas:", tareas);
}

eliminarTarea("Ir al gym");

function listarTareas() {
    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
        console.log((i + 1) + ". " + tareas[i]);
    }
}