// Crear clase Padre "Animal"
export default class Animal {

    // Definimos variables
    #nombre;
    #edad;
    #imagen;
    #comentarios;
    #sonido;

    // Creamos el constructor con los atributos privados
    constructor(nombre, edad, imagen, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#imagen = imagen;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get imagen() {
        return this.#imagen;
    }

    get comentarios() {
        return this.#comentarios;
    }

    get sonido() {
        return this.#sonido;
    }

    // Setters
    set comentarios(nuevoComentario) {
        this.#comentarios = nuevoComentario;
    }

}