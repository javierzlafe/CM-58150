/*


                                SUGAR SYNTAX

La sugar syntax (o sintaxis dulce) se refiere a la forma abreviada o simplificada 
de escribir ciertas condiciones dentro del codigo (de manera mas facil).









                            Operador ternario:           

es una forma abreviada de la declaración if-else  
La sintaxis es la siguiente: 

condición ? valor si verdadero : valor si falso */

const mayorEdad = 18;

if(emayorEdad>=18){ //este es un if normal
  console.log("es mayor, puede ingresar")
}else{
  console.log("es menor de edad")
}

//de esta forma seria con un ternario
const mensaje = mayorEdad >= 18 ? "si, sos mayor de edad" : "sos menor de edad";
console.log(mensaje); // "Eres mayor de edad"






       //   operador and (&&)          
let carrito=[]

 if(carrito.length === 0) {
    console.log("El carrito está vacío!")
  }
/*   Aca se declara una variable carrito que tiene un array vacío, 
  y se usa una estructura if para comprobar si su longitud es cero. 
  Si la longitud del array es cero, entonces se imprime en la consola 
  el mensaje "El carrito está vacío!".
  



  en este caso hacemos lo mismo que arriba, pero usando el operador &&:
   */

  carrito.length === 0 && console.log("El carrito está vacío!")



/*   En esta línea de código, primero se evalúa la expresión carrito.length === 0. 
  Si esta expresión es verdadera, entonces se ejecuta la segunda parte, 
  que es cuando llama a la función console.log() con el mensaje "El carrito está vacío!".
  
  Si la primera expresión es falsa, entonces no se ejecuta la segunda expresión(no hace nada)
 
 */


                            //FALSY    

/* el término "falsy" se usa para describir un valor que se evalúa como falso 
Los valores falsy son los que se consideran como "falsos" o "no verdaderos".

porque falso o no verdadero? no es lo mismo?

como el ejemplo que vimos en la clase.
los chanchos vuelan? = esto definivamente es falso
hoy estudie antes de entrar a la clase? = esto no es verdadero, pero podria ser verdadero


los siguientes valores se consideran falsy:

      false:    El valor booleano false.
      0:        El número cero.
      ""        (cadena vacía): Una cadena de texto vacía.
      null:     Un valor nulo.
      undefined: Un valor no definido.
      NaN:      El valor "Not-a-Number" (no es un número).



                ACA LES DEJO EL EJEMPLO DE CADA CASO:


if (false) {
  console.log("Este mensaje NO se imprimirá");
}

if (0) {
  console.log("Este mensaje NO se imprimirá");
}

if ("") {
  console.log("Este mensaje NO se imprimirá");
}

if (null) {
  console.log("Este mensaje NO se imprimirá");
}

if (undefined) {
  console.log("Este mensaje NO se imprimirá");
}

if (NaN) {
  console.log("Este mensaje NO se imprimirá");
}
En todos los casos anteriores, las condiciones se evalúan como false y los bloques de código dentro de los if no se ejecutan.

Es importante tener en cuenta que otros valores que no estén en la lista de los valores falsy se consideran "truthy" 
y se evaluarán como true en un contexto booleano. */











            //ejemplo de operador OR (||)         

const usuario1 = {
    nombre: "John Doe",
    edad: 14
  }


  const usuario2 = null
 


   console.log( usuario1 || "El usuario no existe" )
  /*En esta línea se está usando el operador lógico || para imprimir 
  en la consola el valor de usuario1 (si es que existe). 
  o la cadena de texto "El usuario no existe" en caso contrario. 
  Como usuario1 es un objeto y los objetos en JavaScript son considerados 
  como valores verdaderos, entonces el resultado de esta 
  expresión nos va a mostrar el usuario1 */
 



  console.log( usuario2 || "El usuario no existe" )
  /*en este caso como usuario2 tiene el valor null, que se considera como un valor falso en JavaScript, 
   el resultado de esta expresión seria el segundo operando, 
  es decir, la cadena de texto "El usuario no existe".






                                //DESESTRUCTURACION




                    //Supongamos que tenemos el siguiente objeto:


const persona = {
  nombre: 'Juan',
  anios: 30,
  ciudad: 'Buenos Aires'
}

/* Podemos usar la desestructuración para extraer los valores de las propiedades del objeto 
y asignarlos a variables individuales, de la siguiente manera: */


/* const { nombre, anios, ciudad } = persona;

console.log(nombre); // 'Juan'
console.log(anios); // 30
console.log(ciudad); // 'Buenos Aires'
 */

/* De esta forma, extraemos los valores de las propiedades nombre, edad y ciudad del objeto persona 
y los asignamos a las variables nombre, edad y ciudad respectivamente. 
Ahora podemos usar estas variables en nuestro código en lugar de tener que acceder a las 
propiedades del objeto directamente. */




/* que pasa si tenes un objeto dentro de otro objeto?, 
también se puede usar la desestructuración para acceder a los valores de las propiedades del objeto interno.

Por ejemplo, supongamos que tenemos el siguiente objeto */


const persona = {
  nombre: 'Juan',
  edad: 30,
  direccion: {
    calle: 'Calle Falsa',
    numero: 123,
    ciudad: 'Buenos Aires'
  }
}

/* Si queremos acceder a los valores de las propiedades del objeto direccion dentro del objeto persona, 
puedes hacerlo de la siguiente manera: */


const { nombre, edad, direccion: { calle, numero, ciudad } } = persona;

console.log(nombre); // 'Juan'
console.log(edad); // 30
console.log(calle); // 'Calle Falsa'
console.log(numero); // 123
console.log(ciudad); // 'Buenos Aires'


/* En este ejemplo, estamos usando la desestructuración para acceder 
a los valores de las propiedades nombre, edad y direccion del objeto persona. 
y despues, estamos usando la desestructuración anidada para acceder a los valores 
de las propiedades calle, numero y ciudad del objeto direccion. 
De esta forma, podemos acceder a los valores de las propiedades del objeto interno 
de una forma más sencilla y elegante. */



/*  para que necesito saber esto?
    tengamos en cuenta que estos, son ejemplos sencillos para entender como funcionan

    pero como les mostre en la clase, les dejo el ejemplo de los tipos de cambio
*/





const data = {
    "timestamp": 165306259364,
    "base": "USD",
    "rates":{
        "JSBAI132585lgv198632LIBN": 985,
        "VEN": 3000000,
        "BRL": 5,
        "CHI": 937,
        "COL": 4200
    }
}



const {rates:{JSBAI132585lgv198632LIBN : ARG, COL}} = data   //recuerden que tambien use el alias para renombrar a ARG

console.log(COL - ARG)







//Javier Gimenez