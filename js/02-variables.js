// Las variables primero se declaran con let
let nombre;
let anioDeNacimiento;
let anioActual;
let edad;
let tieneHijos;

// Se les puede asignar valor con el =
nombre = "Carlos";

anioDeNacimiento = 1993; // PENDIENTE... Esto se toma del form
anioActual = new Date().getFullYear(); // Asigna el año actual

edad = anioActual - anioDeNacimiento;

// Vos tenés ___ años
console.log("Bienvenid@, " + nombre);
console.log("Vos tenés " + edad + " años");

console.log(nombre); // Carlos
console.log("nombre"); // nombre

// Son VARIABLES, pueden cambiar de valor
nombre = "Juan";

console.log(nombre); // Juan
console.log("nombre"); // nombre

