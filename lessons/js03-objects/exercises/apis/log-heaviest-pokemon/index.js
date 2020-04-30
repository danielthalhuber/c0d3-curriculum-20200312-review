const request = require('request');

/**
 * Log the heaviest pokemon the console
 * @returns {undefined}
 */
const logHeaviestPokemon = () => {
  // get a list of pokemon
  request('https://pokeapi.co/api/v2/pokemon/', (err, _, body) => {
    if (err) throw new Error(err);

    const pokemon = JSON.parse(body).results;
    const pokemonDetails = [];

    // get list of details
    pokemon.forEach(({ url }) => {
      request(url, (err, _, body) => {
        if (err) throw new Error(err);

        pokemonDetails.push(JSON.parse(body));

        // if this is the final set of details to be collected, then
        // find and log the heaviest
        if (pokemonDetails.length === pokemon.length) {
          const heaviest = pokemonDetails.reduce((max, curr) => {
            return curr.weight > max.weight ? curr : max;
          });

          console.log(heaviest.name);
        }
      });
    });
  });
};

module.exports = {
  logHeaviestPokemon,
};
