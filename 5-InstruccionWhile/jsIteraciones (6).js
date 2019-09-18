function mostrar()
{

	var contador=0;
	var acumulador=0;
var numero;
/// var i=0;
///while (i<5){i++}

/// for es solo para poner todo en la misma linea y se de antemano
for(var i=0; i <5 ; i++){
numero = parseInt (prompt ('ingrese un numero:'));
acumulador = acumulador + numero;
//acumulador += numero;  otra forma de escribir
}

////do while se ejecuta por lo menos porque la condicion esta al final
/// var i=5
////do {i<5} while (i++)

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

/// variable let distinta de var en let restringe la variable

/// una fomra
/*var numero;
	var acumulador=0;

	while (acumulador <= 100) {
		numero = parseInt (prompt ='ingrese un numero')}*/
