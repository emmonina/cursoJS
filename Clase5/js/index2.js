// si la variable esta afuera eclipsa la que este fuera hosting hace un barrido superficial y se entera de las novedades en el sript

var persona ={
edad :10,
nombre :"lautaro",
apellido :"feliz",
direccion :{
    pais: "argentina",
    localidad : "avellaneda",
    domicilio : {
        calle:"mitre",
        numero: 750
    }
}

};

console.log(persona.apellido);
console.log(persona['nombre']);
console.log(persona.direccion.domicilio.numero);
console.log(persona['direccion']);
console.log(persona['direccion'] ['domicilio']['numero']);
var b =2000;
for ( prop in persona) {
    console.log (prop);
};
for ( prop in persona) {
    console.log (prop + " :" + persona[prop]);
}


