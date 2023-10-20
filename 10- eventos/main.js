/* IMPORTANTE!!!:
UTILIZE EL MISMO NOMBRE EN TODAS LAS VARIABLES, LOS EJEMPLOS ESTAN ARMADOS PARA COPIAR Y PEGAR.
No se olviden de crear el elemento en el html. sino no les va a funcionar NADA. 
ya que JS va a buscar algo que no eixste
*/
 
 
 
 
 //QUE ES UN EVENTO? 




/* Los eventos son acciones que ocurren en un documento web(osea, nuestra pagina), 
como hacer clic en un botón, mover el mouse, pasar el mouse por algun lado, cargar una página, etc. 
sirven para interactuar con el usuario 
y permiten que las páginas web respondan a las acciones del usuario. 


La sintaxis para asignar una función a un evento en JavaScript es la siguiente: */


 
// Seleccionamos el botón y el título utilizando el método getElementById()
let boton = document.getElementById("boton");
let titulo = document.getElementById("titulo");

// Asignamos la función al evento onClick del botón
boton.onclick = function() {
	// Cambiamos el contenido del título
	titulo.innerHTML = "bienvenidos a la clase del pela";
}



                            //ADDEVENLISTENER()  nace en em6 2015

/*
La sintaxis para addEventListener() seria asi:


elemento.addEventListener(evento, funcion);
Donde:

elemento: es el elemento HTML al que se escucha para el evento.
evento: es el nombre del evento que se quiere asignar, como "click", "mousemove", "submit", etc.
funcion: es la función que se va a ejecutar cuando se produzca el evento.

Por ejemplo, si queremos agregar un evento de clic a un botón con ID "mi-boton", se puede usar addEventListener() 
de la siguiente manera:


let boton = document.getElementById("mi-boton");   //crear un boton en html sino no funciona

boton.addEventListener("click", function() {
  alert("¡Hiciste clic en el botón!")
});




En este ejemplo, se selecciona el botón con ID "mi-boton" usando getElementById(). y se agrega un evento de clic 
usando addEventListener(), y se le pasa una función anónima como segundo argumento que se ejecuta cuando 
se hace clic en el botón. En este caso, la función solamente imprime un mensaje en un alert.

addEventListener() tiene varias ventajas sobre otras formas de asignar eventos en JavaScript, 
como elemento.onclick, que permite agregar varias funciones a un mismo evento */





                            //Eventos de mouse



/* 
        CLICK: Este evento se activa cuando el usuario hace clic en un elemento con el mouse.



// Seleccionar un elemento HTML por su ID
let elemento = document.getElementById("miElemento");

// Agregar un evento de click al elemento utilizando addEventListener
elemento.addEventListener("click", function() {
  console.log("hiciste click en el elemento!");
});





        MOUSEOVER: Este evento se activa cuando el mouse entra en un elemento.


let elemento = document.getElementById("miElemento");

elemento.addEventListener("mouseover", function() {
  console.log("El mouse entro en el elemento");
})




            MOUSEOUT: Este evento se activa cuando el mouse sale de un elemento.


let elemento = document.getElementById("miElemento");

elemento.addEventListener("mouseout", function() {
  console.log("El mouse ha salido del elemento!");
});






        MOUSEMOVE: Este evento se activa cuando el mouse se mueve dentro de un elemento.



let elemento = document.getElementById("miElemento");


elemento.addEventListener("mousemove", function(event) {
  console.log("El mouse estaen la posición x: " + event.clientX + " y en la posición y: " + event.clientY);
});



En este último ejemplo, usamos el objeto event para obtener las coordenadas del mouse en la pantalla 
y las muestra en la consola.

Estos son solo algunos de los eventos que puede tener un mouse en JavaScript. 
También existen otros eventos como mousedown, mouseup, contextmenu, entre otros. */





                            //Aca te explico el e.target

    //hace referencia al contenido de la propia etiqueta en la que estamos trabajando, en este caso el boton


    document.getElementById("boton1").addEventListener("click", function (e) {
        // e.target se refiere al elemento <button id="boton1">Botón 1</button>
        alert("Se hizo clic en " + e.target.textContent);  /* textContent.content, seria "boton1" */
      });
      
      document.getElementById("boton2").addEventListener("click", function (e) {
        // e.target se refiere al elemento <button id="boton2">Botón 2</button>
        alert("Se hizo clic en " + e.target.textContent);
      });
                              
                              
                              
                              
                              
                            //EVENTOS DE TECLADO  
    //(recorda crear los elementos en html o no va a funcionar nada)
      
      
      
      
                                  //INPUT
      
      /* input: Este evento se activa cuando se cambia el valor de un elemento de entrada
      El evento input se dispara inmediatamente después de que el valor cambia.
      
      
      let inputField = document.getElementById('miCampoDeTexto');
      inputField.addEventListener('input', function(event) {
        console.log('Valor del campo de texto cambiado:', event.target.value);
      });
      
      
      input: es útil cuando queremos mostrar una vista previa en tiempo real de lo que el usuario está escribiendo, 
      para validar el contenido de un campo de texto a medida que el usuario lo escribe.
      
      
      
      
                                  //CHANGE
      
      
      change: Este evento también se activa cuando se cambia el valor de un elemento de entrada, 
      pero a diferencia del evento input, el evento change se dispara después de que el usuario termino
      de interactuar con el texto, por ejemplo, haciendo clic fuera del campo de texto o apretando enter.
      
      
      let inputField = document.getElementById('miCampoDeTexto');
      inputField.addEventListener('change', function(event) {
        console.log('Valor del campo de texto cambiado:', event.target.value);
      });
      
      
      change: Este evento es útil cuando necesitas realizar alguna acción después de que el usuario haya terminado 
      de ingresar información en un campo de texto o área de texto. 
      Por ejemplo, se usa para validar el contenido de un campo de texto después de que el usuario 
      haya terminado de escribir o para actualizar un campo de texto con el contenido ingresado 
      antes de enviar el formulario.
      
      
      
      
                                  //SUBMIT
      
      
      submit: Este evento se activa cuando se envía un formulario, 
      ya sea haciendo clic en un botón de enviar o presionando la tecla Enter en un campo de texto. 
      Se puede usar para realizar alguna acción antes de enviar el formulario.
      
      
      let form = document.getElementById('miFormulario');
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Detener el envío del formulario
        console.log('Formulario enviado');
      });
      
      
      En el ejemplo anterior, se utiliza el método preventDefault() para detener el envío del formulario 
      y evitar que la página se recargue. 
      Pueden agregar su propia lógica para manejar la información del formulario antes de enviarla al servidor.
      
      



      J
      avier Gimenez
       */
                              
                              
                              