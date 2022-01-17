function getPokemonList(url) {
  fetch(url)
    .then((res) => res.json())
    .then((pokedata) => {
      console.log(pokedata);
      document.querySelector("#list").innerHTML = "";
      pokedata.results.forEach((pokemon) => {
        document.querySelector("#list").innerHTML += `
        <button onclick = "getpokemon('${pokemon.url}')">${pokemon.name}</button>
      `;
      });
      document.querySelector("#list").innerHTML += `
  <button onclick="getPokemonList('${pokedata.previous}')" >Previous</button>
  <button onclick="getPokemonList('${pokedata.next}')" >Next</button>
  `;
    });
}
getPokemonList("https://pokeapi.co/api/v2/pokemon");
function getpokemon(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#pokemon").innerHTML = `
      
        <img src=${data.sprites.front_default} alt="">
        <h1> name: ${data.name}</h1>
        <h2> weight: ${data.weight}</h2>
        <h3> height: ${data.height}</h3>
        <ul>
        <b>ABILITY</b>:
        <li>${data.abilities[0].ability.name}</li>
        </ul>

        <ul> 
        <b>STATS</b>:
        <li>${data.stats[0].stat.name}</li>
        <li>${data.stats[1].stat.name}</li>
        <li>${data.stats[2].stat.name}</li>
        <li>${data.stats[3].stat.name}</li>
        <li>${data.stats[4].stat.name}</li>
        <li>${data.stats[5].stat.name}</li>
        </ul>

        <ul> <b>MOVES</b>:
        <li>${data.moves[0].move.name}</li>
        <li>${data.moves[1].move.name}</li>
        <li>${data.moves[2].move.name}</li>
        <li>${data.moves[3].move.name}</li>
        </ul>
        `;
    });
}
function searchpokemon() {
  const searchchar = document.querySelector("#search").value;
  let url = 'https://pokeapi.co/api/v2/pokemon/' + searchchar;
  getpokemon(url);
}
getpokemon("https://pokeapi.co/api/v2/pokemon/bulbasaur")
 