// Arreglo para guardar los libros
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro agregado:", titulo);
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros que has leído:");
    
    if (librosLeidos.length === 0) {
        console.log("Aún no has agregado libros.");
    } 
    else {
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log((i + 1) + ". " + librosLeidos[i]);
        }
    }
}

mostrarLibrosLeidos();