/*
<input type="text" id="inputNombre" value="un nombre por default">
<input type="date" id="" required>
*/
let elForm = document.getElementById("elForm");
elForm.onsubmit = procesar;

function procesar(e) {
    e.preventDefault(); // Evita que se recargue la página cuando el usuario apreta 'Enviar'

    // Las variables primero se declaran con let
    let nombre;
    let anioDeNacimiento;
    let anioActual;
    let edad;
    let tieneHijos;

    // Los datos que retorna la función prompt() siempre llegan en formato String
    nombre = document.getElementById("inputNombre").value;
    anioDeNacimiento = parseInt(document.getElementById("inputAnioNac").value);
    anioActual = new Date().getFullYear(); // Asigna el año actual

    //anioDeNacimiento = parseInt(anioDeNacimiento);

    edad = anioActual - anioDeNacimiento;

    // Vos tenés ___ años
    console.log("Bienvenid@, " + nombre);
    console.log("Vos tenés " + edad + " años");
}