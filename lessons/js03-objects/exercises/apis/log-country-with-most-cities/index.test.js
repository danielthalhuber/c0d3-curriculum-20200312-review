const { logCountryWithMostCities } = require('./');

describe('logCountryWithMostCities', () => {
  test('not really a test...', (done) => {
    const callback = () => {
      expect(true).toEqual(true);
      done();
    };
    logCountryWithMostCities(callback);
  });
});
