// --------
// IMPORTS PARA EL DOCUMENTO
// --------

import {Leon, Lobo, Oso, Serpiente, Aguila} from "./class/Animales.js";
import data from "./data.js";

// --------
// IIFE PARA OBTENER ARRAY DE ANIMALES
// --------

let animalesApi;
(async () => {
    // Retorna el array de animales (desde BD / JSON)
    animalesApi = await data.getAnimales();
})();

// --------
// CARGAR TABLA
// --------

const animalesSeleccionados = [];
const cargarTabla = () => {
    const cargarInfo = document.getElementById('Animales');
    cargarInfo.innerHTML = "";

    animalesSeleccionados.forEach(animal => {
        cargarInfo.innerHTML +=
        `<div class="card" style="width: 18rem;">
            <img src="${animal.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${animal.nombre}</h5>
                <p class="card-text">${animal.comentarios}</p>
            </div>
        </div>`
    });
}

// --------
// PREVIEW PARA FOTO DEL ANIMAL
// --------

const inputAnimal = document.getElementById("animal");
// Se escucha el evento change del select (donde el usuario selecciona el animal)
inputAnimal.addEventListener('change', async (event) =>{
    // Asignamos a una variable el valor de la opción seleccionada
    const selectAnimal = event.target.value;
    // Recorremos animales consumidos del JSON, se filtra solo el que tenga el mismo nombre del seleccionado
    const animalEncontrado = animalesApi.find(animal => {
        return animal.name == selectAnimal
    });
    // Capturamos en una variable el div 'preview'
    const preview = document.getElementById("preview");
    // Con las propiedades destyle y backgroundImage del elemento, asignamos la imagen de fondo. Que corresponde a la propiedad 'imagen' del objeto animalFound (clase Animal)
    preview.style.backgroundImage = `url(assets/img/${animalEncontrado.imagen})`;
})

// --------
// ACCIONES BOTON REGISTRAR
// --------

const boton = document.getElementById('btnRegistrar');

boton.addEventListener('click', (event) => {
    event.preventDefault();
    // Variables para obtener ID del index.html
    const inputNombre = document.getElementById('animal')
    const inputEdad = document.getElementById('edad')
    const inputComentarios = document.getElementById('comentarios')
    // Variables para guardar las ID antes obtenidas
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    const comentarios = inputComentarios.value;
    // Buscar animal por data name
    let animalFound = animalesApi.find(element => element.name == nombre);
    // Validar si el animal existe en el array
    if (!animalFound){
        return alert ("Animal no existe")
    }
    // Validacion de datos
    if(nombre && edad && comentarios){
        let nuevoAnimal;

        switch (nombre) {
            case "Leon":
                nuevoAnimal = new Leon(animalFound.name, edad, "./assets/img/"+animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Lobo":
                nuevoAnimal = new Lobo(animalFound.name, edad, "./assets/img/"+animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Oso":
                nuevoAnimal = new Oso(animalFound.name, edad, "./assets/img/"+animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Serpiente":
                nuevoAnimal = new Serpiente(animalFound.name, edad, "./assets/img/"+animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Aguila":
                nuevoAnimal = new Aguila(animalFound.name, edad, "./assets/img/"+animalFound.imagen, comentarios, animalFound.sonido);
                break;
        }

        inputNombre.selectedIndex = 0;
        inputEdad.selectedIndex = 0;
        inputComentarios.value = "";

        animalesSeleccionados.push(nuevoAnimal);
        cargarTabla();
    }else{
        alert("Los datos deben ser completados");
    }

})