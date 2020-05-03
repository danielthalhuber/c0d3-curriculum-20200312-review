jest.mock('node-fetch');
console.log = jest.fn();

const { logHeaviestPokemon } = require('./');
const fetch = require('node-fetch');

describe('logHeaviestPokemon', () => {
  test('requests data, finds and logs heaviest Pokemon', () => {
    const pokemon = Array(10)
      .fill(null)
      .map((_, i) => ({
        name: `Pokemon${i}`,
        url: `http://mo.ck/${i}/`,
        weight: Math.floor(1 + Math.random() * 100),
      }));

    const heaviestPokemon = pokemon
      .map(({ name, weight }) => ({ name, weight }))
      .reduce((prev, curr) => (curr.weight > prev.weight ? curr : prev));

    const apiResponse = [{ results: pokemon }, ...pokemon];
    let index = 0;

    fetch.mockReset();
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(apiResponse[index++]),
      })
    );

    return logHeaviestPokemon().then(() => {
      expect(fetch.mock.calls.length).toEqual(11);
      expect(console.log.mock.calls.length).toEqual(1);
      expect(console.log.mock.calls[0][0]).toEqual(heaviestPokemon.name);
    });
  });

  test('throws error when request is rejected', () => {
    const error = 'Oh no, an error!';
    fetch.mockReset();
    fetch.mockReturnValue(Promise.reject(error));
    return expect(logHeaviestPokemon()).rejects.toThrow(error);
  });
});
