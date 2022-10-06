
let persona;

let persona2 = {
    nombre: "Pepe",
    cantHijos: 2
}

persona = {
    nombre: "Alan",
    apellido: "Turing",
    colorDePelo: "Negro",
    altura: 1.75,
    edad: 20,
    auto: {
        marca: "Ford",
        modelo: "Fiesta",
        patente: "ABC123",
        motor: {
            nro: "3432423",
            cantCilindros: 4,
            tipo: "Nafta"
        }
    },
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`
    },
    presentarse: function(conEntusiasmo) {
        let saludo = `Hola, soy ${this.nombreCompleto()}, un gusto`;
        if (conEntusiasmo) {
            saludo = saludo + "!!!";
        }
        console.log(saludo);
    }
};

console.log(persona);
persona.colorDePelo = "Rubio";
console.log(persona);
console.log(persona.nombreCompleto());
persona.presentarse(true);
persona.presentarse(false);