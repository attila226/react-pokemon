const pokemonArray = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "poison"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: 2,
    name: "ivysaur",
    types: ["grass", "poison"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    id: 5,
    name: "Charmelion",
    types: ["fire"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  },
  {
    id: 20,
    name: "Raticate",
    types: ["normal"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
  },
  {
    id: 25,
    name: "Pikachu",
    types: ["electric"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: 26,
    name: "Raichu",
    types: ["electric"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
  },
  {
    id: 38,
    name: "Ninetales",
    types: ["fire"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
  },
  {
    id: 39,
    name: "Jigglypuff",
    types: ["normal", "fairy"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
  },
  {
    id: 49,
    name: "Wigglypuff",
    types: ["normal", "fairy"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"
  }
];

const types = [
  "grass",
  "poison",
  "fire",
  "flying",
  "water",
  "bug",
  "normal",
  "electric",
  "ground",
  "fairy"
].sort();

export { pokemonArray, types };
