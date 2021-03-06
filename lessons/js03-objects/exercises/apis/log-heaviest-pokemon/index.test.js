jest.mock('request');
console.log = jest.fn();

const { logHeaviestPokemon } = require('./');
const request = require('request');

describe('logHeaviestPokemon', () => {
  describe('requests data, finds and logs heaviest Pokemon', () => {
    const pokemon = Array(10)
      .fill(null)
      .map((_, i) => ({
        name: `Pokemon${i}`,
        url: `http://mo.ck/${i}/`,
        weight: Math.floor(1 + Math.random() * 100),
      }));

    test('makes initial request to API', () => {
      // make first request to API
      logHeaviestPokemon();
      expect(request.mock.calls.length).toEqual(1);
    });

    test('calls request once for each id with correct URL', () => {
      // execute callback from first call to request to API
      // triggers calls to API for Pokemon details
      const responseBody = JSON.stringify({
        results: pokemon.map(({ name, url }) => ({
          name,
          url,
        })),
      });
      request.mock.calls[0][1](undefined, undefined, responseBody);
      expect(request.mock.calls.length).toEqual(pokemon.length + 1);

      // inspect URL argument to request and execute callbacks
      request.mock.calls.slice(1).forEach(([url, cb], i) => {
        // check the URL
        expect(url).toEqual(pokemon[i].url);

        // call callback from requests to API for details
        // final call will trigger the console.log statement
        const { name, weight } = pokemon[i];
        const responseBody = JSON.stringify({ name, weight });
        cb(undefined, undefined, responseBody);
      });
    });

    test('logs the heaviest to the console', () => {
      const heaviestPokemon = pokemon
        .map(({ name, weight }) => ({ name, weight }))
        .reduce((prev, curr) => (curr.weight > prev.weight ? curr : prev));
      expect(console.log.mock.calls[0][0]).toEqual(heaviestPokemon.name);
    });
  });
});
