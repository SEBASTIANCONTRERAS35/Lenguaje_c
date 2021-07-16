
function triangulo (base, altura){
    console.log ((base * altura)/2  )}
triangulo(20, 5)

function cuadrado (base, altura){
    console.log ((base * altura)  )}
cuadrado(20, 5)

function rectangulo (base, altura){
    console.log ((base * altura)  )}
rectangulo(20, 5)

function edad (edad){
    if(edad >=18 ){
        console.log(edad + "   eres mayor de edad")
    }
    else if (edad <18 ){
        console.log(edad + "   eres menor de edad")
    }
    else {console.log ( "no es un numero" )}
} 
edad (15)

    function numero (numero){
        if(numero <0){
            console.log(numero + " es negativo")
        }
        else if (numero >=0 ){
            console.log(numero + "es positivo  ")
        }
        else {console.log ( "no es un numero" )}
    } 
numero (20)

function vocal (vocal) {
    if(vocal==="a" || vocal ==="e"|| vocal ==="i"||vocal ==="o"|| vocal ==="u" ){
        console.log(vocal + " es vocal")
    }
    else { console.log (vocal + " es consonante")}
    }
 vocal ("r")
