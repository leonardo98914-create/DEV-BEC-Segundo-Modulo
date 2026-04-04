// Arreglo de regalos
const regalos = ["Muñeca", "Carro", "Pelota", "Videojuego", "Rompecabezas"];

// Función recursiva
const buscarRegalo = (lista, regalo, indice = 0) => {
  // Caso base: si ya recorrimos todo el arreglo
  if (indice >= lista.length) {
    return `El regalo "${regalo}" no está en la lista`;
  }

  // Si encontramos el regalo
  if (lista[indice] === regalo) {
    return `El regalo "${regalo}" está en la posición ${indice}`;
  }

  // Llamada recursiva
  return buscarRegalo(lista, regalo, indice + 1);
};

// Ejemplos
console.log(buscarRegalo(regalos, "Pelota"));
console.log(buscarRegalo(regalos, "Bicicleta"));