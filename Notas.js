let nota = 80;
let Mensaje = "None";
if (nota >= 90) {
    Mensaje = "Excelente";
} else if (nota >= 75 && nota <= 89) {
    Mensaje = "Bien";
}else if (nota >= 60 && nota <= 74){
    Mensaje = "Suficiente";
} else {
    Mensaje = "NO APRUEBA";
}

console.log(Mensaje);