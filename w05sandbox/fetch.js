const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url, useThisFunction) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    useThisFunction(data);
  }
}

function doStuff(data) {
    const outputElement = document.querySelector('#output');
    results = data;
    const html = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`

    console.log("first: ", results);
    outputElement.innerHTML = html;
}

const urlList = "https://pokeapi.co/api/v2/pokemon";

function doStuffList(data) {
    console.log(data);
    outputListElement = document.querySelector('#outputList');
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((pokemon) => {
        const html = `<li>${pokemon.name}</li>`;
        outputListElement.innerHTML += html;
    });
}

function sortPokemon(list) {
    let sortedList = list.sort((a,b) => {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    });
    return sortedList;
}

getPokemon(urlList, doStuffList);

getPokemon(url, doStuff);
console.log("second: ", results);