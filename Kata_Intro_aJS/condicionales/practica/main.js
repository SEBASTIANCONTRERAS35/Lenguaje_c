var numero = prompt ("Introduce un numero")
var resultado = (numero % 2)
if(resultado === 0 ){
console.log(numero+"es par")}
else if (resultado === 1 )
{ console.log (numero+"es impar")}
else
{console.log ("no es un numero")}



// Si puedes conducir
// es menor de edad -> no puede conducir
// si 16 y 17  -> permiso para conducir
// si eres mayor de 18 puedes conducir 
// si si eres mayor de 90  --> ya no puedes conducir

var askAge = prompt('Cual es tu edad')
var valueAge = Number(askAge)

if (valueAge >= 18 && valueAge <= 90) {
    console.log('Puedes conducir 🤓')
} else if (valueAge === 16 || valueAge === 17) {
    console.log('Puedes sacar tu permiso para conducir 😎')
} else if (valueAge <= 15 || valueAge > 90 ) {
    console.warn('No puedes conducir 😞')
}else {
    console.error('No es una edad valida, intentalo de nuevo 🤬')
}


//-------- Challenge 2 --------
// Juego de piedra papel o tijera ✂️ ⛰ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano y porque