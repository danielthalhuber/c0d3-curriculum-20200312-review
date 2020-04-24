const { logHeaviestPokemon } = require('./');

describe('logHeaviestPokemon', () => {
  test('not really a test...', (done) => {
    const callback = () => {
      expect(true).toEqual(true);
      done();
    };
    logHeaviestPokemon(callback);
  });
});
