/*
    7) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.
 */

let cantEstaturas;
let estatura;
let acuEstaturas = 0;
let promedio;

// 3
cantEstaturas = parseInt(prompt("¿Cuántas estaturas va a cargar?"));

for (let i = 1; i <= cantEstaturas; i++) {
    estatura = parseFloat(prompt(`Ingrese la estatura #${i}`));
    acuEstaturas = acuEstaturas + estatura;
}

promedio = acuEstaturas / cantEstaturas;
console.log(`El promedio es ${promedio} m.`);