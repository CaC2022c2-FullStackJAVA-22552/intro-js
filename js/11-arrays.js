// DEFINICIONES DE FUNCIONES
function mostrarArray(elArray) {
  for (let i = 0; i < elArray.length; i++) {
    const valor = elArray[i];
    console.log(`${i}: ${valor}`);
  }
}

function obtenerPromedio(elArrayDeNumeros) {
  return sumatoria(elArrayDeNumeros) / elArrayDeNumeros.length;
}

function sumatoria(elArrayDeNumeros) {
  let acu = 0;
  for (let i = 0; i <= elArrayDeNumeros.length; i++) {
    acu = acu + elArrayDeNumeros[i];
  }
  return acu;
}

function leerNumeroPositivo(mensaje) {
  let numero = parseFloat(prompt(mensaje));
  while (numero <= 0) {
    numero = parseFloat(prompt(`ERROR. ${mensaje}`));
  }
  return numero;
}

function mostrarNumerosMayoresQue(elArrayDeNumeros, unValor) {
    for (let i = 0; i < elArrayDeNumeros.length; i++) {
        const n = elArrayDeNumeros[i];
        if(n > unValor) {
            console.log(n);
        }    
    }
}

/*
    El usuario ingresa N (lo pone él) edades. La PC indica cuáles de esas edades superan el promedio
*/

let cantEdades = leerNumeroPositivo("Cuántas edades vas a ingresar?");
let edades = new Array(cantEdades);
let prom;

for (let i = 0; i < cantEdades; i++) {
  edades[i] = leerNumeroPositivo(`Ingresá la edad nº ${i + 1}`);
}

prom = obtenerPromedio(edades);
mostrarNumerosMayoresQue(edades, prom);



/*mostrarArray(edades);
mostrarArray(["Carlos", "Emanuel", "Cimino"]);*/
