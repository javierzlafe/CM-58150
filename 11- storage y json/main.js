

//STORAGE


//HAY 4 METODOS PARA USAR EL STORAGE

/* 
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer un clave desde el storage
removeItem() para eliminar un dato especifico
clear() limpia todo "elimina todo"
*/


/* function mandar(){
    localStorage.setItem("nombre", "mariano piombo")
} */





/* const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputEdad = document.querySelector("#inputEdad")
const inputDireccion = document.querySelector("#inputDireccion")
const boton = document.getElementById("boton")


function guardarFormulario(){

    localStorage.setItem("nombre", inputNombre.value)
    localStorage.setItem("apellido", inputApellido.value)
    localStorage.setItem("edad", inputEdad.value)
    localStorage.setItem("direccion", inputDireccion.value)
}




function recuperarDatosDelFormulario(){
    inputNombre.value = localStorage.getItem("nombre")
    inputApellido.value = localStorage.getItem("apellido")
    inputEdad.value = localStorage.getItem("edad")
    inputDireccion.value = localStorage.getItem("direccion")
}


boton.addEventListener("click", guardarFormulario)




for(let i = 0; i<localStorage.length;i++){
    let clave =localStorage.key(i)
    console.log("el valor de la clave es " + clave)
}

 */



const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "lenovo", precio: 70 },
                  {  id: 3,  producto: "mate"  , precio: 50},
                  {  id: 4,  producto: "alfajor" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const x of productos) {
    guardarLocal(x.id, JSON.stringify(x));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));