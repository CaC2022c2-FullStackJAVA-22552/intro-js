// Las variables primero se declaran con let
let nombre;
let anioDeNacimiento;
let anioActual;
let edad;
let tieneHijos;

// Los datos que retorna la función prompt() siempre llegan en formato String
nombre = prompt("Colocá tu nombre");
anioDeNacimiento = prompt("Colocá tu año de nacimiento");
anioActual = new Date().getFullYear(); // Asigna el año actual

console.log(anioDeNacimiento);
anioDeNacimiento = parseInt(anioDeNacimiento);
console.log(anioDeNacimiento);
edad = anioActual - anioDeNacimiento;

// Vos tenés ___ años
console.log("Bienvenid@, " + nombre);
console.log("Vos tenés " + edad + " años");
