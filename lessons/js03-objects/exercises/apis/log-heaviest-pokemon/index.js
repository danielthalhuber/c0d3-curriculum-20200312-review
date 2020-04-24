const request = require('request');

/**
 * Log the heaviest pokemon the console
 * @returns {undefined}
 */
const logHeaviestPokemon = (callback) => {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

  // helper to get Pokemon details
  const getDetails = (ids, cb, details = []) => {
    if (ids.length < 1) cb(details);

    request(`${baseURL}${ids[0]}/`, (err, _, body) => {
      if (err) return console.log(err);

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
    if (err) return console.log(err);

    // get a list of Pokemon ids
    const ids = JSON.parse(body).results.map(({ url }) =>
      url
        .slice(0, url.length - 1)
        .split('/')
        .pop()
    );

    // get details and then log the heaviest
    const cb = (details) => {
      logHeaviest(details);

      // for testing
      if (typeof callback === 'function') callback();
    };
    getDetails(ids, cb);
  });
};

module.exports = {
  logHeaviestPokemon,
};
