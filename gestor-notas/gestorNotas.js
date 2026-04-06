// Importar modulo Files System
const fs = require("fs");

const archivo = "notas.json";

// 🔹 Leer notas, si no existe el archivo, regresa arreglo vacío
const leerNotas = () => {
  try {
    const data = fs.readFileSync(archivo, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Guardar notas
const guardarNotas = (notas) => {
  fs.writeFileSync(archivo, JSON.stringify(notas, null, 2));
};


// Crear una nota

const crearNota = (titulo, contenido) => {
  const notas = leerNotas();

  // Evitar duplicados por título
  const existe = notas.find(nota => nota.titulo === titulo);

  if (existe) {
    console.log("Ya existe una nota con ese título");
    return;
  }

  notas.push({ titulo, contenido });
  guardarNotas(notas);

  console.log("Nota creada correctamente");
};


// Listar notas

const listarNotas = () => {
  const notas = leerNotas();

  if (notas.length === 0) {
    console.log("No hay notas guardadas");
    return;
  }

  console.log("📒 Lista de notas:");
  notas.forEach((nota, i) => {
    console.log(`${i + 1}. ${nota.titulo} - ${nota.contenido}`);
  });
};


// Eliminar nota

const eliminarNota = (titulo) => {
  const notas = leerNotas();

  const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);

  if (notas.length === nuevasNotas.length) {
    console.log("No se encontró la nota");
    return;
  }

  guardarNotas(nuevasNotas);
  console.log("Nota eliminada correctamente");
};


// PRUEBAS (puedes modificar)

crearNota("Tarea", "Hacer ejercicio");
crearNota("Compra", "Comprar leche");

listarNotas();

eliminarNota("Tarea");

listarNotas();