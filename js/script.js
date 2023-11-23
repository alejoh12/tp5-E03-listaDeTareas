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

    console.log(seccionInformacionExtra[0].children);
}

const eliminar = (e) => {
    e.preventDefault();

    const cadena = document.getElementById("borrar");

    console.log("Estoy en la función borrar.");
}

const formAgregar = document.getElementById("formAgregar");
const formEliminar = document.getElementById("formEliminar");

formAgregar.addEventListener("submit",agregar);
formEliminar.addEventListener("submit",eliminar);