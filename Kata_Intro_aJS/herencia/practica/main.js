class maestro {
    constructor(grupo, promediototal){
        this.grupo=grupo
        this.promediototal=promediototal
    }
    promedioEscuela(){
        return `${this.grupo} tiene el promedio total de ${this.promediototal}`
    }

}
class maestroDeFisica extends maestro{
    constructor(grupo, antiguedad){
    super(grupo)
    this.antiguedad=antiguedad
    }
    promedioMateriaFis(){
        return`${this.grupo} tiene el promedio total en la materia de fisica de ${this.antiguedad} `
    }
   
} 
class maestroDeMusica extends maestro{
    constructor(grupo, edad){
    super(grupo)
    this.edad=edad
    }
    promedioMateriaMusic(){
        return`${this.grupo} tiene el promedio total en la materia de musica de ${this.edad} `
    }
   
} 
let valuesFis = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = valuesFis.reduce((previous, current) => current += previous);
let avg = sum / valuesFis.length;
let promediofis=parseFloat(avg)

let valuesMusic = [66, 77, 23, 81, 50, 47, 10, 83];
let sum2 = valuesMusic.reduce((previous, current) => current += previous);
let avg2 = sum2 / valuesMusic.length;
let promedioMusic=parseFloat(avg2)

let valuestotal=[promediofis, promedioMusic]
let sumtotal = valuestotal.reduce((previous, current) => current += previous);
let avgtotal = sum / valuestotal.length;
let promedioTOTAL=parseFloat(avgtotal)
    
const terceroAFis=new maestroDeFisica("Tercero a", promediofis)
console.log(terceroAFis.promedioMateriaFis())

const terceroAMusic=new maestroDeMusica("Tercero a", promedioMusic)
console.log(terceroAMusic.promedioMateriaMusic())

const terceroATotal= new maestro ("Tercero a", promedioTOTAL)
console.log(terceroATotal.promedioEscuela())


class construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo , ancho, terrenototal ){
    this.numPuertas=numPuertas
    this.numVentanas=numVentanas
    this.numPisos=numPisos
    this.direccion=direccion
    this.altura=altura
    this.largo=largo
    this.ancho=ancho
    this.terrenototal=terrenototal
    }
}
class casa extends construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo , ancho, terrenototal){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo , ancho, terrenototal)

    }
    caracteristicas_casa(){
        return` la casa tiene las siguientes caracteristicas= 
        ${this.numPuertas}puertas
        ${this.numVentanas}ventanas            
        ${this.numPisos}pisos     
        direccion= ${this.direccion}
        ${this.altura}m de altura       
        ${this.largo}m de largo     
        ${this.ancho}m de ancho
        ${this.terrenototal}m2 de terreno total`
        
    }
}
class edificio extends construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo , ancho,terrenototal){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo , ancho,terrenototal)
        
    }
    caracteristicas_edificio(){
        return` el edificio tiene las siguientes caracteristicas=
         ${this.numPuertas}puertas
         ${this.numVentanas}ventanas
         ${this.numPisos}pisos
         ${this.direccion}
         ${this.altura}m de altura
         ${this.largo}m de largo
         ${this.ancho}m de ancho
         ${this.terrenototal}m2 de terreno total`
    }
}
let terrenoTotalcasa= (50*200 *500)
const casaCaracteristicas= new casa (2,4,2,"Acoxpa",50,200,500, terrenoTotalcasa)
console.log (casaCaracteristicas.caracteristicas_casa())

let terrenoTotaledificio= (1000*500*2000)
const edificioCaracteristicas= new edificio (6,30,6,"Acoxpa",1000,500,2000, terrenoTotaledificio)
console.log (edificioCaracteristicas.caracteristicas_edificio())

class bebida{
    constructor(cantidad){
    this.cantidad=cantidad
}
}
class cerveza extends  bebida{
    constructor(cantidad, Alcohol ){
        super(cantidad)
        this.Alcohol=Alcohol
    }
    caracteristicas_cerveza(){
        return`La cerveza tiene una cantidad de ${this.cantidad} ml y un porcentaje de alcohol de ${this.Alcohol}`
    
    }
}
class refresco extends bebida{
    constructor(cantidad, azucar){
        super(cantidad)
        this.azucar=azucar

    }
    caracteristicas_refresco(){
        return`El refresco tiene una cantidad de ${this.cantidad}  y  ${this.azucar} mg de azucar `
    }
}
const indio= new cerveza(500, "%5")
console.log(indio.caracteristicas_cerveza())
const coco_cola= new refresco("2L" ,100)
console.log (coco_cola.caracteristicas_refresco())

class electrodomestico{
    constructor(precio, color, consumoEnergetico, capacidad){
        this.precio=precio
        this.color=color
        this.consumoEnergetico=consumoEnergetico
        this.capacidad=capacidad
    }
    caracteristicas_electrodomestico(){
        return`el electrodomestico tiene un precio de ${this.precio}, tiene un color ${this.color}, su consumoEnergetico es de ${this.consumoEnergetico}, y tiene una capacidad de ${this.capacidad} `

    }

}
class lavadora extends electrodomestico{
    constructor(precio, color, consumoEnergetico, capacidad, carga,precioFinal){
    super(precio, color, consumoEnergetico, capacidad)
    this.carga= carga
    this.precioFinal=precioFinal
    }
    preciofinal(){
        return`La lavadora tiene un precio de ${this.precio}, tiene un color ${this.color}, su consumoEnergetico es de ${this.consumoEnergetico}, tiene una capacidad de ${this.capacidad}, una carga de ${this.carga} y un precio final de ${this.precioFinal} `
    }
}
let carga= prompt("Ingresa la carga de la lavadora")
let consumo=prompt("Ingresa el consumo energetico de la lavadora")
let precio_final= carga*consumo

const licuadora= new electrodomestico(prompt("ingresa el precio de la licuadora"), prompt("ingresa el color de la licuadora"), prompt("ingresa el consumo energetico de la licuadora") , prompt("ingresa la capacidad de la licuadora"))
console.log(licuadora.caracteristicas_electrodomestico())
const Wirlpool=new lavadora(prompt("ingresa el precio de la lavadora"), prompt("ingresa el color de la lavadora"), consumo,prompt("ingresa la capacidad de la lavadora"),carga, precio_final)
console.log(Wirlpool.preciofinal())


