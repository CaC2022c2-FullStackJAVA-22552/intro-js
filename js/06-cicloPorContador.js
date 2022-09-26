
/*
    REPETIR 5 VECES
console.log("1) Debo practicar programación");
console.log("2) Debo practicar programación");
console.log("3) Debo practicar programación");
*/
console.log("Mostrando con while");
let cont = 1; // Inicialización
while (cont <= 5) { // Condición
    console.log(`${cont} Debo practicar programación`);
    cont = cont + 1; // Actualización
}

// cont++; // Equivalente a decir cont = cont + 1
// cont += 1; // Equivalente a decir cont = cont + 1
// ESTO ESTÁ MAL: cont = cont++;

console.log("Mostrando con for");
for (let i = 1; i <= 5; i++) {
    console.log(`${i} Debo practicar programación`);
}