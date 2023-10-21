
//aca dejo el codigo que armamos, lo unique que agregue, fue un poco de CSS. 
//en el codigo les voy a decir paso a paso que hace cada linea para que no se pierdan.


//defino el constructor de los objetos
const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio,
    this. stock = stock
}


//creo los objetos
let producto1= new Producto ("notebook lenovo", 480000, 20)
let producto2= new Producto ("lenovo pad", 45500, 26)
let producto3= new Producto ("notebook apple macbook", 700000, 45)
let producto4= new Producto ("apple pad", 350000, 23)
let producto5= new Producto ("apple smartwatch", 150000, 10)
let producto6= new Producto ("samsung smartwatch", 17000, 30)
let producto7= new Producto ("samsung smarttv", 120000, 1)
let producto8= new Producto ("samsung galaxy s23", 320000, 7)



//meto los productos en una lista
let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]



/* IMPORTANTE, si en el localstorage hay productos que agregue anteriormente, 
antes de hacer cualquier cosa en mirograma los traigo, porque mi sistema solo tiene 7 productos standar, 
pero de esta manera, si en el localstorage almacene 35 mas... antes de arrancar el sistema, los va a buscar
y los mete a mi lista */

if (localStorage.getItem("productos")) {  //anda al localstorage y traeme la key productos
    lista = JSON.parse(localStorage.getItem("productos")); //parseame todo y metelo en la lista
    } else {
    lista = lista  //si no hay nada, la lista es igual a la lista de siempre
    }
    //lel comando que agrega los productos nuevos al storage esta en la linea 136


//enlazo los botones con el html
  const filtrarBtn = document.getElementById("filtrar");
   filtrarBtn.addEventListener("click", () => {filtrarProductos();});
   
   const agregarBtn = document.getElementById("agregar");
   agregarBtn.addEventListener("click", () => {agregarProducto();});



   //armo funcion para filtrar

   function filtrarProductos() {   
    const body = document.querySelector('body');
  
    const input = document.getElementById('filtrarP').value  //traigo el valor del input
  
    const palabraClave = input.trim().toUpperCase();
  
    const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));
  
    if (resultado.length > 0) {  //si hay algun resultado, creo el container
      const container = document.createElement('div');
      container.classList.add('card-container');   //agrego la clase de css al container que creé
  
      resultado.forEach((producto) => { //recorro el producto y creo el div,p,h2,etc...
        const card = document.createElement('div');
        card.classList.add('card');  //agrego la clase de css a la card que creé
  
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
  
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
  
        const stock = document.createElement('p');
        stock.textContent = `Stock: ${producto.stock}`;
        card.appendChild(stock);
  
        container.appendChild(card);
      });
  
      body.appendChild(container);  //agrego el container como hijo del body
    } else {
      alert('No se encontraron coincidencias');
    }
  } 


//funcion para agregar los productos que no existen
  function agregarProducto() { 
    const form = document.createElement('form'); //creo un formulario inyectado desde js
    form.innerHTML = `
      <label for="nombre-input">Nombre:</label>
      <input id="nombre-input" type="text" required>
      
      <label for="precio-input">Precio:</label>
      <input id="precio-input" type="number" step="0.01" required>
      
      <label for="stock-input">Stock:</label>
      <input id="stock-input" type="number" step="1" required>
      
      <button type="submit">Agregar</button>
    `;
  
    form.addEventListener('submit', function (event) { //el boton que envia, evalua si todo esta ok
      event.preventDefault();
  
      //IMPORTANTE! estos "id" refieren a los inyectados en el form de arriba (no vienen del html) lo explique en el after, veanlo
      const nombreInput = document.getElementById('nombre-input').value.trim();
      const precioInput = parseFloat(document.getElementById('precio-input').value);
      const stockInput = parseInt(document.getElementById('stock-input').value);
  
      if (isNaN(precioInput) || isNaN(stockInput) || nombreInput === '') { //valido los input
        alert('Por favor ingresa valores válidos.');
        return;
      }
  
      const producto = new Producto(nombreInput, precioInput, stockInput); //si esta ok, creo un producto nuevo
  
      //busco si hay un elemento existente que se llame igual al que cree
      if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
        alert('El producto ya existe en la lista.');
        return;
      }
  
      lista.push(producto); //si no esta en la lista, lo pusheo
  
  

      //aca agrego el producto creado en el storage
      localStorage.setItem("productos", JSON.stringify(lista));
  
      alert(`Se ha agregado el producto "${producto.nombre}" a la lista.`);
  
      console.table(lista); //lo muestro por consola
  
      //cuando creo y pusheo el producto nuevo, lo muestro en la pantalla creando una card nueva
      const container = document.createElement('div');
      container.classList.add('card-container');
  
      lista.forEach((producto) => {   // Itera sobre la lista

        const card = document.createElement('div'); // Crea un nuevo elemento 'div'
        card.classList.add('card'); //agrego la clase de css a la card que creé
  
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
  
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
  
        const stock = document.createElement('p');
        stock.textContent = `Stock: ${producto.stock}`;
        card.appendChild(stock);
  
        container.appendChild(card);
      });
  
      // agrego el 'container' creado al body
      const body = document.querySelector('body');
      body.appendChild(container);
  
      form.reset();  //cuando ya agregue todo, reestablesco a cero el formulario
    });
  
    const body = document.querySelector('body');
    body.appendChild(form);  //agrego el formulario al body    (sin esto, nunca aparece el formulario)
  } 



  //Javier Gimenez