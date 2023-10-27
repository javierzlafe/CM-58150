



//setTimeout

/* function saludar(){
    console.log("hola mundo")
}
setTimeout(saludar,4000)


console.log("bienvenidos a la clase de asincronia")


console.log("aca termina todo") */



/* 
const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')



btn.addEventListener('click', () => {
    popup.classList.add('popup-active')



    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})
 */



//usuario ingresa el time
//parsear entrada
//activar interval
//crear funcion para el interval y le digo el tiempo
//que se termine el inteval



/* let num = parseInt(prompt("ingresa los segundos")) 
let segundos = num*1000

let time = setInterval( ()=>{
    const date = new Date();
    console.log(date.toLocaleTimeString())
}, 1000)


setTimeout( ()=>{
    clearInterval(time)
}, segundos)

 */



const div  = document.getElementById("divResultado")
const obtenerBtn = document.getElementById("obtenerBtn")


const productos = [
    
]





const obtenerProducto = ()=>{
    console.log("obteniendo productos")
    return new Promise((resolve, reject) => {
        if(productos.length ===0){
            reject("error al obtener productos")
        }else{
            setTimeout( ()=>{
                resolve(productos)
            },3000)
        }
    })
}



obtenerBtn.addEventListener("click", ()=>{

    obtenerProducto()
    .then(()=>{
        div.innerHTML= `<h1>todo salio ok</h1>`
    })

    .catch( (error)=>{
        console.error(error)
    } )
})