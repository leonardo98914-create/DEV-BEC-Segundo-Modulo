const encontrarMaximo = (arr, inicio = 0, fin = arr.length - 1) => {
  // solo un elemento
  if (inicio === fin) {
    return arr[inicio];
  }

  // Dividir el arreglo en dos
  const mitad = Math.floor((inicio + fin) / 2);

  const maxIzq = encontrarMaximo(arr, inicio, mitad);
  const maxDer = encontrarMaximo(arr, mitad + 1, fin);

  // Conquistar: comparar ambos
  return maxIzq > maxDer ? maxIzq : maxDer;
};

// Ejemplo
const numeros = [3, 9, 2, 15, 6, 21, 8];
console.log("Número máximo:", encontrarMaximo(numeros));

// Buscar Arreglo 
const buscarRegalo = (regalos, regaloBuscado, indice = 0) => {
  // se terminó la lista
  if (indice >= regalos.length) {
    return "El regalo no está en la lista";
  }

  // Si se encuentra el regalo
  if (regalos[indice] === regaloBuscado) {
    return `Regalo encontrado en la posición ${indice}`;
  }

  // Llamada recursiva (avanza al siguiente)
  return buscarRegalo(regalos, regaloBuscado, indice + 1);
};

// Ejemplo
const listaRegalos = ["Muñeca", "Carro", "Pelota", "Rompecabezas"];

console.log(buscarRegalo(listaRegalos, "Pelota"));
console.log(buscarRegalo(listaRegalos, "Bicicleta"));