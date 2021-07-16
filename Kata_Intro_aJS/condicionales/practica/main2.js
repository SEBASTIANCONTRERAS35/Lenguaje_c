const usuario1 = prompt("Elige piedra papel o tijera")
const usuario2 = prompt("Elige piedra papel o tijera")


if (usuario1 === "piedra" && usuario2 === "tijera"){
console.log ("Gano el usuario1")}
else if (usuario1 === "papel" && usuario2 === "papel") {
 console.log ("Empate")}
 else if (usuario1 === "tijera" && usuario2 === "tijera") {
    console.log ("Empate")}
    else if (usuario1 === "piedra" && usuario2 === "piedra") {
        console.log ("Empate")}
 else if (usuario1 === "tijera" && usuario2 === "papel") {
    console.log ("Gano el usuario1")}

    else if (usuario1 === "papel" && usuario2 === "tijera") {
        console.log ("Gano el usuario2")}
        else if (usuario1 === "tijera" && usuario2 === "piedra") {
           console.log ("Gano el usuario2")}
           else if (usuario1 === "piedra" && usuario2 === "papel") {
            console.log ("Gano el usuario2")}
            else if (usuario1 === "papel" && usuario2 === "piedra") {
               console.log ("Gano el usuario1")}

            else { console.error (" No es valido ")}

            
