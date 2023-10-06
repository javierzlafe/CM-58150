/* 
Estructura HTML del proyecto. ****
Variables de JS necesarias. ****
Funciones esenciales del proceso a simular.
Objetos de JS. ****
Arrays. ****
Métodos de búsqueda y filtrado sobre el Array.
*/


//constructor, productos, buscar producto, el cliente agrega productos.


const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("notebook lenovo", 580000, 20)
let producto2 = new Producto ("notebook samsung", 700000, 2)
let producto3 = new Producto ("lenovo pad", 58000, 25)
let producto4 = new Producto ("apple pad", 900000, 5)
let producto5 = new Producto ("notebook macbook", 1200000, 1)
let producto6 = new Producto ("apple smartwach", 50000, 32)
let producto7 = new Producto ("telefono galaxy s21", 480000, 65)


let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7]



//.trim() elimina espacios EXTERIORES en el string

function filtrarProductos (){
    let palabraClave = prompt("ingresa lo que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((producto)=>producto.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro coincidencia con " + palabraClave)
    }
}



function agregarProducto(){
    let nombre = prompt("ingresa el nombre del producto").trim()
    let precio = parseFloat(prompt("ingresa el precio")) 
    let stock = parseInt(prompt("ingresa el stock")) 


    if (isNaN(precio) || nombre==="" || isNaN(stock)){
        alert("porfavor, ingresa datos validos")
    return;
    }

    let producto = new Producto(nombre,precio,stock)
    lista.push(producto)
    console.table(lista)

}