var persona = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 20,
    domicilio : {
        pais: "Argentina",
        localidad : "Avellaneda",
        direccion :{
            calle: "Av Mitre",
            numero: 750
        }
    }
};

console.log( persona.nombre); // Juan

console.log( persona.domicilio.pais); // Argentina

console.log( persona.domicilio.direccion.calle); // Av Mitre


console.log( persona['domicilio']['direccion']['calle']);

var x = "edad";

console.log( persona[x]);

for( prop in persona){
    console.log(prop+ " : " + persona[prop]);    
}
for( prop in persona.domicilio){
    console.log(prop+ " : " + persona.domicilio[prop]);    
}
for( prop in persona.domicilio.direccion){
    console.log(prop+ " : " + persona.domicilio.direccion[prop]);    
}








