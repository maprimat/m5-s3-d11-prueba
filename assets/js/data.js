// Crear función IIFE
let data = (() => {

    // Variable para guardar el JSON de los animales
    let urlDatos = "/animales.json"
    
    // Funcion para consumir los datos recibidos
    let getAnimales = async () =>{
        const response = await fetch (urlDatos);
        const { animales } = await response.json();
        return animales;
    }

    return { getAnimales }
})()

export default data;