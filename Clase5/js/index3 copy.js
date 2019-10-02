function persona (nombre, apellido, edad) {
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    
   /* this.saludar =function () {
        console.log ("hola, soy " + this.nombre + " " + this.apellido);
        
    };*/
}


var x = new persona("ESTEBAN","QUITO","22");
var y = new persona("ARMANDO","GUERRA","66");
console.log (x);
console.log (y);

function saludar() {
    
console.log ("hola "+ this.nombre);
    
};

persona.prototype.saludar = saludar;

//x.genero ='masculino'
persona.prototype.genero =20;
console.log (x);
console.log (y);
console.log (z);