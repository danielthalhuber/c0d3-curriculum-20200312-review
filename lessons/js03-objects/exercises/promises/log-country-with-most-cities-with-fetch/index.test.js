jest.mock('node-fetch');
console.log = jest.fn();

const { logCountryWithMostCities } = require('./');
const fetch = require('node-fetch');

describe('logCountryWithMostCities', () => {
  test('requests data, finds and logs country with most cities', () => {
    const countries = [...Array(10).keys()].map((v) => ({
      name: `country${v}`,
      cities: Math.floor(1 + 100 * Math.random()),
    }));
    const countryWithMostCities = countries.reduce((withMost, curr) =>
      curr.cities > withMost.cities ? curr : withMost
    );

    fetch.mockReset();
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => ({
          results: countries,
        }),
      })
    );

    return logCountryWithMostCities().then(() => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(console.log.mock.calls.length).toEqual(1);
      expect(console.log.mock.calls[0][0]).toEqual(countryWithMostCities.name);
    });
  });

  test('throws error when request is rejected', () => {
    const error = 'Oh no, an error!';
    fetch.mockReset();
    fetch.mockReturnValue(Promise.reject(error));
    return expect(logCountryWithMostCities()).rejects.toThrow(error);
  });
});
