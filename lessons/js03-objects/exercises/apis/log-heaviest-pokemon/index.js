const request = require('request');

/**
 * Log the heaviest pokemon the console
 * @returns {undefined}
 */
const logHeaviestPokemon = () => {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

  // helper to get Pokemon details
  const getDetails = (ids, cb, details = []) => {
    if (ids.length < 1) return cb(details);

    request(`${baseURL}${ids[0]}/`, (err, _, body) => {
      if (err) throw new Error(err);

      details.push(JSON.parse(body));
      return getDetails(ids.slice(1), cb, details);
    });
  };

  // helper that logs the heaviest
  const logHeaviest = (details) => {
    const heaviest = details.reduce((max, curr) => {
      return curr.weight > max.weight ? curr : max;
    });

    console.log(heaviest.name);
  };

  request(baseURL, (err, _, body) => {
    if (err) throw new Error(err);

    // get a list of Pokemon ids
    const ids = JSON.parse(body).results.map(({ url }) =>
      url
        .slice(0, url.length - 1)
        .split('/')
        .pop()
    );

    // get details and then log the heaviest
    getDetails(ids, (details) => logHeaviest(details));
  });
};

module.exports = {
  logHeaviestPokemon,
};
