// Declaramos el arreglo
let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana"];

// Creamos el objeto para contar
let conteo = {};

// Recorremos el arreglo con for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya existe en el objeto, sumamos 1
    if (conteo[fruta]) {
        conteo[fruta]++;
    }
     else {
        // Si no existe, la iniciamos en 1
        conteo[fruta] = 1;
    }
}

// Imprimimos el resultado
console.log("Cantidad de frutas:");
for (let tipo in conteo) {
    console.log(tipo + ": " + conteo[tipo]);
}


// Usando while

let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana"];
let conteo = {};

let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];

    if (conteo[fruta]) {
        conteo[fruta]++;
    } 
    else {
        conteo[fruta] = 1;
    }

    i++;
}

console.log("Cantidad de frutas:");
for (let tipo in conteo) {
    console.log(tipo + ": " + conteo[tipo]);
}