
function Persona(nombre, apellido, edad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}
Persona.prototype.saludar = function () {
    console.log("Hola, soy " + this.nombre + " " + this.apellido);

}

var x = new Persona("Juan", "Perez", 23);
var y = new Persona("Lucia", "Garcia", 30);
var z = new Persona("Andrea", "Vasquez", 31);

console.log(x);
console.log(y);
console.log(z);

// x.genero = "Masculino";
Persona.prototype.genero = 20;
console.log(x);
console.log(y);
console.log(z);

x.saludar();
y.saludar();
z.saludar();