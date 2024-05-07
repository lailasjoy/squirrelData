let demoSq = {};

const sqLinks = document.querySelectorAll(".pokemon-link");
const sqContainer = document.querySelector("#squirrel-container");
const button=document.querySelector("#update-squirrel");

// let's max out number of possibilities to 1000
const totalSquirrels = 999;
const randomInteger = Math.floor(Math.random() * totalSquirrels);

const apiURL = `https://data.cityofnewyork.us/resource/gfqj-f768.json/${randomInteger}`;

button.onclick=function() {
  getSquirrel();
}

function getSquirrel(){
const totalSquirrels = 999;
const randomInteger = Math.floor(Math.random() * totalSquirrels);

const apiURL = `https://data.cityofnewyork.us/resource/gfqj-f768.json/${randomInteger}`;


fetch(apiURL).then(response => {
  return response.json();
})
.then(response => {  
  
  console.log("demoResponse: ", response);
  demoSquirrel.name = response.name;
  demoSquirrel.abilities = response.abilities;
  demoSquirrel.forms = response.forms;
  demoSquirrel.moves = response.moves;
  
  // display demo links & content
  let pokeDOM = `
    <div class="pokemon">
      <h2>
        Name: ${demoSquirrel.name.charAt(0).toUpperCase() + demoSquirrel.name.slice(1)}
      </h2>`;
  
     
  // add list of abilities
  // console.log(demoPokemon.abilities);
  squirrelDOM += `<h3>Abilities:</h3>
      <ul class="abilities">`;
  demoSquirrel.abilities.forEach((ability,index) => {
    pokeDOM += `<li>${demoPokemon.abilities[index].ability.name}</li>`;
  });
  // close out abilities ul
  pokeDOM += `</ul>`;
  
  // add list of moves
  // console.log(demoPokemon.moves);
  pokeDOM += `
      <h3>Moves:</h3>
      <ul class="moves">`;
  demoPokemon.moves.forEach((move,index) => {
    pokeDOM += `<li>${demoPokemon.moves[index].move.name}</li>`;
  });
  // close out moves ul
  pokeDOM += `</ul>`;
  
  // finish up pokeDOM
  pokeDOM += `</div>`;
  
  // add pokeDOM to pokemonContainer
  pokemonContainer.innerHTML = pokeDOM;
})
.catch(error => {
  console.error(error);
});
};
