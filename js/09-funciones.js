
// DEFINIMOS UNA VEZ LA FUNCION
function saludar() {
    console.log("Hola!");
}

function saludarA(nombre) {
    console.log(`Hola ${nombre}`);
}

function siguiente(x) {
    return x + 1;
}


/////////////////////////////////////////////////////////////

let elSiguienteDe8;
// LA INVOCAMOS N VECES
for (let i = 0; i < 3; i++) {
    saludar();  
    saludarA("María"); 
    elSiguienteDe8 = siguiente(8);
    console.log(elSiguienteDe8)
    console.log(siguiente(1));
}