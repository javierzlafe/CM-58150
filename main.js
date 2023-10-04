





//console.log(Math.PI) //muestra el valor de pi que es estatico (no cambia)
//console.log(Math.abs(-7.8)) //devuelve el valor ABSOLUTO sin considerar neg o pos
//console.log(Math.ceil(7.1)) //devuelve el valor redondeado para arriba
//console.log(Math.floor(7.9)) //devuelve el valor redondeado para abajo
//console.log(Math.round(7.5)) //redondea al valor mas cercano
//console.log(Math.pow(2,5)) // devuelve el resultado del primer numero elevado al segundo
//console.log(Math.sqrt(81)) //devuelve raiz cuadrada
//console.log(Math.random() *30 +20)  // *30 es que recorre 30 posiciones y +20 es que arranca desde el numero 20

//console.log(  Math.round( Math.random() *50))    //uso uno sobre el otro para obtener un random entero


/* console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4, -48) ) // -48

 */


/* let opciones = ["piedra","papel","tijera"]

let eleccionPrograma = opciones[Math.floor(Math.random() * opciones.length)]

let eleccionJugador = prompt("elije : piedra, papel o tijera").toUpperCase()
let resultado = ""

if(eleccionJugador == eleccionPrograma){
    resultado = "empate"

}else if(
eleccionJugador === "PIEDRA" && eleccionPrograma==="TIJERA" || 
eleccionJugador === "PAPEL" &&  eleccionPrograma === "PIEDRA" ||
eleccionJugador === "TIJERA" && eleccionPrograma === "PAPEL"){   
    resultado = "ganaste" + eleccionJugador + "vence a " + eleccionPrograma
}else{
    resultado = "perdiste" + eleccionPrograma + "vence a " + eleccionJugador
}

alert(resultado) */





/* console.log( new Date() ) */

/* 
const fechaActual = new Date()


console.log(fechaActual)

 */



/* 
año (4 digitos)
mes (0-11)
dia (1-31)
hora (0-23)
minutos (0-59)
segundos (0-59)
milisegundos(0-999)
*/


//el 25 de diciembre a las 10:30 de este año
/* 
let fechaEspecifica = new Date(2023,11,25,10,30,0,0)

console.log(fechaEspecifica)
 */

/* const fecha = new Date()

const anio = fecha.getFullYear() //traeme el año entero
const mes = fecha.getMonth() +1
const dia = fecha.getDate()

console.log(`la fecha actual es ${anio}/${mes}/${dia}`) */




/* const hoy = new Date()

console.log( hoy.toDateString() ) //
console.log( hoy.toLocaleString() ) // 
console.log( hoy.toLocaleDateString() ) // 
console.log( hoy.toTimeString() ) //  */



