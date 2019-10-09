let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais){

    this.nombre = nombre;

}

window.addEventListener('load', function(){
  //var frm =   document.getElementById('frmPersona');
 // var frm = document.getElementsByTagName('form')[0];
    var frm = document.forms[0];

    frm.addEventListener('submit', manejarSubmit);
    
});

function manejarSubmit(e){

    e.preventDefault();
    var frm = e.target;

    //alert("Capture el evento submit");
    // aca voy crear una Persona
    var nuevaPersona = new Persona(kllklklklklk);

    listaPersonas.push(nuevaPersona);

    

}