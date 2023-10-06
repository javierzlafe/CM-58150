

/*                                          DOM

       el término "DOM" hace referencia al "Document Object Model" o Modelo de Objetos del Documento. 
       Es una representación de un documento HTML que nos deja interactuar 
       con los elementos (las etiquetas html) del documento y manipular el contenido, 
       la estructura y estilo desde JavaScript. */
 
       


                                        //FORMAS DE LLAMAR


/* getElementById: busca un elemento HTML en una página web por su 
identificador único (osea el ID)y lo devuelve.
Ejemplo: document.getElementById('pochoclo') buscará un elemento con el ID "pochoclo" en el HTML 
y lo retornará si existe.


getElementsByClassName:busca y devuelve una lista de elementos HTML que tienen la misma 
clase en una página web.
Ejemplo: document.getElementsByClassName('miClase') seleccionará todos los elementos que 
tienen la clase "miClase" y los devolverá en una lista.



getElementsByTagName: busca y devuelve una lista de elementos HTML que tienen el mismo nombre 
de etiqueta en una página web.
Ejemplo: document.getElementsByTagName('p') seleccionará todos los elementos de párrafo ("p") 
en el documento y los devolverá en una lista.






/* 

al usar el class name, si hay mas de una class llamada igual, me trae todo en formato de array
(recorda que solo funciona si hay una lista de paises en el html, yo la deje anotada y comentada)

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML); 





/* 
tambien puedo recorrerlos con un for of

let paises = document.getElementsByClassName("paises");
for (const pais of paises) {
    console.log(pais.innerHTML); */




                //INNER TEXT  (texto interior)

//al mostrar solo "titulo", nos devuelve la estructura del html. para acceder al texto usamos .inenerText

/* let titulo = document.getElementById("titulo")
console.log( titulo.innerText )


titulo.innerHTML= "<h2>saraza</h2> <p>melocoton con dulce de batata<p>"
console.log( titulo.innerText ) */



                //VALUE

/*
de esta manera asignamos el valor que queremos, al elemento seleccionado

document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 36;
 */





            //EJEMPLO USADO EN CLASE PARA CREAR ELEMENTOS EN EL HTML


/*let padre = document.getElementById("personas");    (recorda crear un div con id "personas" en el html)


let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];

for (const persona of personas) {       //recorro con un for-of mi array de personas
    let lista = document.createElement("li");    //Creo un nodo <li> y agrego al padre en cada ciclo
    lista.innerHTML = persona
    padre.appendChild(lista);
} */



                //EJEMPLO PARA RECORRER UN ARRAY Y CREAR UNA PLANTILLA POR CADA PRODUCTO


/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100},
                  {  id: 5,  nombre: "helado" , precio: 150}];


for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
 */



                        //QUERY SELECTOR

/*let parrafo = document.querySelector("#contenedor") // seleccionar sólo el contenedor por id con #

let contenedor = document.querySelector(".contenedor") //selecciona por clase. SOLO TRAE AL PRIMERO QUE ENCUENTRA

parrafo = document.querySelectoraAll(".texto")  //trae todas las clases que se llamen ".texto" */
