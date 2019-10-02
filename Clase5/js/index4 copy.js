function advenger (nombre, nombrereal, poder) {
    
    this.nombre = nombre;
    this.nombrereal = nombrereal;
    this.salud =100;
    this.poder = poder;
    
   /* this.saludar =function () {
        console.log ("hola, soy " + this.nombre + " " + this.apellido);
        
    };*/

    this.status = function () {
        console.log (this.nombre + " salud " + this.salud)
    }


    this.curar = function(amigo) {
        if (this.poder > 40)
        {amigo.salud +=20;
        this.poder -=40;}
    }

    this.atacar = function (malo) {
        malo.poder -=50;
    }
    
}
var iroman  = new advenger("ironman","tony",1000);
var capitan = new advenger("capitan","steve",500);
var thanos = new advenger("thanos","tanos",1500);

