/*
    El usuario ingresa su edad. La PC le dice si pasa o no al casino.
    Upgrade: Si es menor, decirle cuántos años le faltan para entrar.
    Upgrade: Si se ingresa una edad negativa, informar que no es válido.
    Upgrade: No tener un 18 mágico en el código
*/

let edad;
let difEdad;
const MAYORIA_EDAD = 18;
edad = parseInt(prompt("Ingresá tu edad"));
/*
if (edad > 0) {
    if (edad >= 18) {
        console.log("Sí, pasás al casino");
    } else {
        console.log("No, todavía sos menor de edad");
        difEdad = 18 - edad;
        //console.log("Te faltan " + difEdad + " años para poder ingresar"); // Sintaxis vieja
        console.log(`Te faltan ${difEdad} años para poder ingresar`); // Sintaxis moderna
    }
} else {
    console.log(`El valor ${edad} no es válido`);
}*/

// Otra forma más corta
if (edad <= 0) {
    console.log(`El valor ${edad} no es válido`);
} else if (edad < MAYORIA_EDAD) {
    console.log("No, todavía sos menor de edad");
    difEdad = MAYORIA_EDAD - edad;
    //console.log("Te faltan " + difEdad + " años para poder ingresar"); // Sintaxis vieja
    console.log(`Te faltan ${difEdad} años para poder ingresar`); // Sintaxis moderna
} else {
    console.log("Sí, pasás al casino");
}