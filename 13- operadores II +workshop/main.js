
                        //spreed operator


/* El operador spread (operador de propagación)
se usa para descomponer un objeto iterable (como un arreglo) en elementos individuales. 
El operador se representa con tres puntos consecutivos ... y se utiliza en diferentes contextos.
*/


                //Para expandir un arreglo: 


                const arr1 = [1, 2, 3];
                const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
                /* En este ejemplo, el operador ... se utiliza para expandir el arreglo arr1 
                en elementos individuales y luego se agregan los elementos 4 y 5 al nuevo arreglo arr2. */
                
                
                
                                //Para pasar argumentos de una función:
                
                
                function sum(x, y, z) {
                  return x + y + z;
                }
                const numbers = [1, 2, 3];
                const result = sum(...numbers); // 6
                
                /* En este ejemplo, el operador ... se utiliza para expandir los elementos del arreglo numbers 
                en argumentos individuales y pasarlos a la función sum. */
                
                
                
                                    //Para crear una copia superficial de un objeto:
                
                
                
                
                const obj1 = { 
                    nombre: "javier", 
                    apellido: "gimenez" 
                };
                const obj2 = { 
                    ...obj1, 
                    puesto: "profesor" 
                }; 
                
                
                /* aca se utiliza para crear una copia superficial del objeto obj1 
                y luego agregar la propiedad puesto: "profesor" al nuevo objeto obj2. */
                
                
                
                /* El operador spread es una característica útil de JavaScript que permite escribir 
                código más conciso y expresivo. */



/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]


console.log(...nombres) //los transforma a string individuales

 */

/* 
const num1 = [1,2,3]
const num2 = [4,5,6]

const numeros = [...num2,...num1]   //los concatena

console.log(numeros) */



/* function suma(x,y,z){
    return x+y+z
}
const number = [1,2,3]  


console.log(suma(...number)) //separa los numeros y los suma individualmente
*/
