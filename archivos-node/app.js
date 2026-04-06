// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = './example.txt';

if (fs.existsSync(filePath)) {
  console.log('El archivo existe.');
} else {
  console.log('El archivo no existe.');
}

// Leer el contenido
fs.readFile('./example.txt', 'utf8', (error, contenido) => {
    if(error){
        console.error('Ocurrio un error al leer el archivo:', error);
        return;
    }
     //Si no existe ningun error
    console.log('Contenido del Archivo ');
    console.log(contenido);
})

//Escribir un archivo si no esxiste, o cambiar el contenido de uno existente
fs.writeFile()