// Lista de invitados 
const invitados = ["Ana", "Andrés", "Carlos", "Carmen", "Luis", "María"];

// Función para encontrar el primer par válido
const encontrarPareja = (lista) => {
  for (let i = 0; i < lista.length - 1; i++) {
    const actual = lista[i];
    const siguiente = lista[i + 1];

    // Comparar la primera letra
    if (actual[0] === siguiente[0]) {
      return [actual, siguiente];
    }
  }
  return null; 
};

// Ejecutar
const resultado = encontrarPareja(invitados);

if (resultado) {
  console.log("Primera pareja encontrada:", resultado);
} else {
  console.log("No hay parejas que cumplan la condición");
}