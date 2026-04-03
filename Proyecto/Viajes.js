// Arreglo Viajes
const viajes = [];

// Registrar destino
export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    viajes.push({ destino, fecha, transporte, personas });
};

// Calcular costo
export const calcularCosto = (destino, transporte, personas) => {
    let costoBase = 0;

    if (destino === "Paris") costoBase = 1000;
    else if (destino === "Roma") costoBase = 800;
    else if (destino === "Tokyo") costoBase = 1200;
    else costoBase = 500;

    if (transporte === "avion") costoBase += 500;
    else if (transporte === "tren") costoBase += 200;
    else if (transporte === "bus") costoBase += 100;

    // 💡 descuento por varias personas
    if (personas >= 4) {
        costoBase *= 0.9; // 10% descuento
    }

    return costoBase * personas;
};

// Mostrar itinerario
export const mostrarItinerario = () => {
    viajes.forEach((viaje, index) => {
        const costo = calcularCosto(
            viaje.destino,
            viaje.transporte,
            viaje.personas
        );

        console.log(`Viaje #${index + 1}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Personas: ${viaje.personas}`);
        console.log(`Costo total: $${costo}`);
        console.log("----------------------");
    });
};