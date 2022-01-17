  const searchterm = document.querySelector("#pokemon").value;
    let url = "https://pokeapi.co/api/v2/pokemon/charizard{searchTerm}", ;
    
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        function serchPokemon() {
            document.querySelector("#pokemon").innerHTML = `
        <img src=${data.sprites.front_default} alt="">
        <h1>${data.name}</h1>
        <h2>${data.weight}</h2>
        <h3>${data.height}</h3>
        <ul>
        <li>${data.abilities[0].ability.name}</li>
        <li>${data.abilities[1].ability.name}</li>
        </ul>

        <ul>
        <li>${data.stats[0].stat.name}</li>
        <li>${data.stats[1].stat.name}</li>
        <li>${data.stats[2].stat.name}</li>
        <li>${data.stats[3].stat.name}</li>
        <li>${data.stats[4].stat.name}</li>
        <li>${data.stats[5].stat.name}</li>
        </ul>

        <ul>
        <li>${data.moves[0].move.name}</li>
        <li>${data.moves[1].move.name}</li>
        <li>${data.moves[2].move.name}</li>
        <li>${data.moves[3].move.name}</li>
        <li>${data.moves[4].move.name}</li>
        <li>${data.moves[5].move.name}</li>
        </ul>
        `;
    
        });
    });
}
    