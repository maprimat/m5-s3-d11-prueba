// Importamos la clase Padre "Animal" para relacionarla a las nuevas clases
import Animal from "./Animal.js";

// Creamos variable para reproductor
const reproductor = document.getElementById('player');

// Creamos las clases hijas
export class Leon extends Animal {

    // Creamos el constructor con sus atributos
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    // Creamos el método de sonido para la clase Leon
    rugir(){
        reproductor.src = `./assets/sounds/${this.sonido}` ;
        reproductor.play();
    }
    // Método global para sonido
    emitirSonido(){
        this.rugir();
    }
}

export class Lobo extends Animal {

    // Creamos el constructor con sus atributos
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    // Creamos el método de sonido para la clase Leon
    aullar(){
        reproductor.src = `./assets/sounds/${this.sonido}` ;
        reproductor.play();
    }
    // Método global para sonido
    emitirSonido(){
        this.aullar();
    }
}

export class Oso extends Animal {

    // Creamos el constructor con sus atributos
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    // Creamos el método de sonido para la clase Leon
    grunir(){
        reproductor.src = `./assets/sounds/${this.sonido}` ;
        reproductor.play();
    }
    // Método global para sonido
    emitirSonido(){
        this.grunir();
    }
}

export class Serpiente extends Animal {

    // Creamos el constructor con sus atributos
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    // Creamos el método de sonido para la clase Leon
    sisear(){
        reproductor.src = `./assets/sounds/${this.sonido}` ;
        reproductor.play();
    }
    // Método global para sonido
    emitirSonido(){
        this.sisear();
    }
}

export class Aguila extends Animal {

    // Creamos el constructor con sus atributos
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    // Creamos el método de sonido para la clase Leon
    chillar(){
        reproductor.src = `./assets/sounds/${this.sonido}` ;
        reproductor.play();
    }
    // Método global para sonido
    emitirSonido(){
        this.chillar();
    }
}