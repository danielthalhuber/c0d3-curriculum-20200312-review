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
      // triggers first call to API for Pokemon details
      const responseData = JSON.stringify({
        results: pokemon.map(({ name, url }) => ({
          name,
          url,
        })),
      });
      request.mock.calls[0][1](undefined, undefined, responseData);

      pokemon.forEach(({ name, weight }, i, arr) => {
        // check the request arguments from call to API for details
        expect(request.mock.calls.length).toEqual(i + 2);
        expect(request.mock.calls[i + 1][0].endsWith(`/${i}/`)).toEqual(true);

        // execute callback from API for details
        // each callback triggers next request to API
        const responseData = JSON.stringify({ name, weight });
        request.mock.calls[i + 1][1](undefined, undefined, responseData);
      });
    });

    test('logs heaviest Pokemon', () => {
      const heaviestPokemon = pokemon
        .map(({ name, weight }) => ({ name, weight }))
        .reduce((prev, curr) => (curr.weight > prev.weight ? curr : prev));
      expect(console.log.mock.calls[0][0]).toEqual(heaviestPokemon.name);
    });
  });
});
