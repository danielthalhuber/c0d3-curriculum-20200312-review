const fetch = require('node-fetch');

/**
 * Log the heaviest pokemon the console
 * @returns {undefined}
 */
const logHeaviestPokemon = () =>
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((pokemon) =>
      Promise.all(
        pokemon.results.map(({ url }) =>
          fetch(url).then((response) => response.json())
        )
      )
    )
    .then((pokemonDetails) => {
      const heaviest = pokemonDetails.reduce((max, curr) => {
        return curr.weight > max.weight ? curr : max;
      });

      console.log(heaviest.name);
    })
    .catch((err) => {
      throw new Error(err);
    });

module.exports = {
  logHeaviestPokemon,
};
