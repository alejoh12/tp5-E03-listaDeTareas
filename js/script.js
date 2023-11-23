/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/
const agregar = (e) => {
    e.preventDefault();

    const cadena = document.getElementById("agregar");
    
    const tareaNueva = document.createElement("li");
    tareaNueva.innerHTML = cadena.value;

    const seccionInformacionExtra = document.getElementsByClassName("lista");
    seccionInformacionExtra[0].insertBefore(tareaNueva,primera);

    // console.log(seccionInformacionExtra[0].children);
}

const eliminar = (e) => {
    e.preventDefault();

    // Crear array
    const seccionTareas = document.getElementsByClassName("lista");
    const listaDefinitiva = [];

    for(let i=0;i<seccionTareas[0].children.length;i++) {
        console.log("Tarea "+i+" : "+seccionTareas[0].children[i].innerHTML);
        listaDefinitiva[i] = seccionTareas[0].children[i].innerHTML;
    }
    console.log("Lista Definitiva");
    listaDefinitiva.map( tarea => console.log(tarea));

    // filtrar las tareas para borrar
    const cadena = document.getElementById("borrar");
    let cadenaBorrar = cadena.value;

    const tareasBorrar = listaDefinitiva.filter((tarea) => tarea.includes(cadenaBorrar));
    console.log("Tareas borrar:");
    tareasBorrar.map( tarea => console.log(tarea));

    // Eliminar las tareas
    let contador=0;
    tareasBorrar.map( t => {
        if(tareasBorrar[contador] === seccionTareas[0].children[contador].innerHTML) {
            seccionTareas[0].removeChild(seccionTareas[0].children[contador]);
        }
        contador++;
    });
}

const formAgregar = document.getElementById("formAgregar");
const formEliminar = document.getElementById("formEliminar");

formAgregar.addEventListener("submit",agregar);
formEliminar.addEventListener("submit",eliminar);