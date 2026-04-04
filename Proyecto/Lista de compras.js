// Arreglo vacío
const listaDeCompras = [];

// Agregar producto (sin duplicados)
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`${producto} agregado correctamente`);
  } else {
    console.log(`${producto} ya está en la lista`);
  }
};

// Eliminar producto
const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`${producto} eliminado correctamente`);
  } else {
    console.log(`${producto} no se encontró en la lista`);
  }
};

// Mostrar lista
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista está vacía");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, i) => {
      console.log(`${i + 1}. ${producto}`);
    });
  }
};

// Ejemplo 
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche"); // duplicado

mostrarLista();

eliminarProducto("Pan");

mostrarLista();