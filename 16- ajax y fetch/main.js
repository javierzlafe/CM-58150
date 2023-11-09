
/* 
   

                       QUE ES FETCH?  


fetch es una función incorporada en JavaScript que permite realizar solicitudes HTTP 
desde nuestro navegador web a todos los recursos en la web, como por ejemplo los servidores. 
Esta función se usa para recuperar datos de forma asíncrona y actualizar dinámicamente 
el contenido de una página web sin tener que recargarla toda por completo. 
Fetch es una parte esencial de la tecnología AJAX y normalmente se usa para interactuar con APIs 
y obtener datos en formato JSON u otros.
*/


 //estructura de un fetch

/* fetch('https://api.example.com/data')
  .then(response => response.json())  //se convierte la respuesta a formato JSON usando response.json(),
  .then(data => {
    console.log(data); // Aca puedes trabajar con los datos recibidos
  })
  .catch(error => {
    console.error('Error:', error);
  }); */





  const URLs = "https://jsonplaceholder.typicode.com/posts/2"

  fetch(URLs)
      .then((respuesta)=> respuesta.json())
      .then((data)=> console.table(data))
      .catch((error)=> console.log("se rompio todo"))

      



      /* fetch('productos.json')
.then(response => response.json())
.then(data => {
  const frutas = data.frutas;

  // Obténgo el elemento del DOM donde deseas mostrar las frutas
  const frutasContainer = document.getElementById('frutas-container');
  frutasContainer.className = ("pepe")

  // Recorro la lista de frutas y creo elementos para mostrarlas
  frutas.forEach(fruta => {
    const frutaElement = document.createElement('p');
    frutaElement.textContent = `Nombre: ${fruta.nombre}, Color: ${fruta.color}, Sabor: ${fruta.sabor}`;
    frutasContainer.appendChild(frutaElement);
  });
})
.catch(error => {
  console.error('Ha ocurrido un error:');
}); */



//ejemplo de los pokemon
//recuerden que varios de estos atributos del objeto son de la propia api


let URL = 'https://pokeapi.co/api/v2/pokemon?limit=3'

const pokemonContainer = document.getElementById('pokemon-container');

fetch(URL)
.then(response => response.json())
.then(data => {
  const pokemons = data.results;

  pokemons.forEach((pokemon) => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(pokemonData => {
        const pokemonElement = document.createElement('div');
        pokemonElement.innerHTML = `
          <h2>${pokemonData.name}</h2>
          <img src="${pokemonData.sprites.front_default}" >
          <p>Tipo: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>  
        `;
        pokemonContainer.appendChild(pokemonElement);
      })
      .catch(error => {
        console.error('Ha ocurrido un error al obtener los datos del Pokémon:', error);
      });
  });
})
.catch(error => {
  console.error('Ha ocurrido un error al obtener la lista de Pokémon:');
});




/* 
const url = "https://jsonplaceholder.typicode.com/post/2"



fetch(url)
        .then((respuesta)=> respuesta.json())
        .then((data)=> console.table(data))
        .catch(()=> console.error("el profe rompio todo por una s"))


 */
      


        //armen el json con productos, sino no va a leer nada
        fetch("productos.json")
            .then(response=>response.json())
            .then( data =>{
                const frutas = data.frutas

                //obtengo el elemento del dom
                const frutasContainer =  document.getElementById("frutas-container")
                frutasContainer.className = ("pepe")


                //recorre la lista de frutas y crear elementos para mostrarlas
                frutas.forEach( fruta =>{
                    const frutaElement = document.createElement("h1")
                    frutaElement.textContent = `Nombre: ${fruta.nombre}, Color: ${fruta.color}, sabor: ${fruta.sabor}`
                    frutasContainer.appendChild(frutaElement)

                })


            })
            .catch(error=>{
                console.error("ha ocurrido un error")
            })
