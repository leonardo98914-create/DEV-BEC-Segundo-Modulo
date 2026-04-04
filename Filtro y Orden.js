// Arreglo de productos
const productos = [
  { nombre: "Laptop", precio: 12000, categoria: "Electrónica" },
  { nombre: "Mouse", precio: 150, categoria: "Electrónica" },
  { nombre: "Cuaderno", precio: 50, categoria: "Papelería" },
  { nombre: "Pluma", precio: 20, categoria: "Papelería" },
  { nombre: "Audífonos", precio: 80, categoria: "Electrónica" }
];

// 1. Filtrar productos menores a $100
const productosBaratos = productos.filter(p => p.precio < 100);
console.log("Productos menores a $100:", productosBaratos);

// 2. Ordenar alfabéticamente por nombre
const productosOrdenados = [...productosBaratos].sort((a, b) => 
  a.nombre.localeCompare(b.nombre)
);
console.log("Productos ordenados:", productosOrdenados);

// 3. Obtener solo los nombres
const nombresProductos = productosOrdenados.map(p => p.nombre);
console.log("Nombres de productos:", nombresProductos);

// 🔥 Opcional: usar reduce 
const total = productosBaratos.reduce((acc, p) => acc + p.precio, 0);
console.log("Suma total de productos baratos:", total);

// 🔥 Opcional: usar some 
const hayMuyBarato = productos.some(p => p.precio < 30);
console.log("¿Hay productos menores a $30?:", hayMuyBarato);

// 🔥 Opcional: usar every 
const todosElectronica = productos.every(p => p.categoria === "Electrónica");
console.log("¿Todos son de Electrónica?:", todosElectronica);