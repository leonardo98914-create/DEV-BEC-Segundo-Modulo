// Crear el objeto libro
let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: "disponible", // o prestado
    capitulos: [],

    // Método para describir el libro
    describirLibro: function () {
        console.log("Libro titulado '" + this.titulo +
            "', escrito por " + this.autor +
            " en el año " + this.anio +
            ", el estado es: " + this.estado + ".");
    },

    // Método para agregar capítulo
    agregarCapitulo: function (capitulo) {
        this.capitulos.push(capitulo);
        console.log("Capítulo agregado:", capitulo);
    },

    // Método para eliminar capítulo
    eliminarCapitulo: function (capitulo) {
        let index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log("Capítulo eliminado:", capitulo);
        } 
        else {
            console.log("Capítulo no encontrado.");
        }
    }
};