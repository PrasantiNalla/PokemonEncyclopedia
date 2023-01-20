// Research HTTP requests
// Make a request to the Pokeapi and hopefully receive some data about a pokemon of your choice
// Console log the Pokemon's name, weight and height
// Bonus: console log the Pokemon's type(s)
// try fetch
//const response = await fetch("https://pokeapi.co/api/v2/pokemon/2");

//var keys = Object.keys(pokemon);


//console.log(`Name: ${pokemon.name}, height: ${pokemon.height}, weight: ${pokemon.weight}`);
//console.log((await response.text()))
//let responseArray;

let pokemonArray = [];
for (let i = 0; i < 20; i++) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + i;
    //console.log(url);
    const response = await fetch(url);

    if (response.ok) {
        const pokemon = await response.json();
        console.log(`Name: ${pokemon.name}, height: ${pokemon.height}, weight: ${pokemon.weight}`);
        pokemonArray.push(pokemon);
       // console.log(Object.values(pokemon));
    }
}

//console.log(pokemonArray[0].height);
let maxHeight = 0;
let maxHeightName;
let maxHeightWeight = 0;
for (let value of pokemonArray) {
    // maxHeight = value.height;
    // console.log(value.height);
    if (value.height > maxHeight) {
        maxHeight = value.height;
        maxHeightName = value.name;
        maxHeightWeight = value.weight;
    }
}
console.log(`Pokemon with max height is Name: ${maxHeight}, height: ${maxHeightName}, weight: ${maxHeightWeight}`);