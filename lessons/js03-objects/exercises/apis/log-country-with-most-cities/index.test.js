jest.mock('request');
console.log = jest.fn();

const { logCountryWithMostCities } = require('./');
const request = require('request');

describe('logCountryWithMostCities', () => {
  describe('requests data, finds and logs country with most cities', () => {
    const countries = [...Array(10).keys()].map((v) => ({
      name: `country${v}`,
      cities: Math.floor(1 + 100 * Math.random()),
    }));
    const countryWithMostCities = countries.reduce((withMost, curr) =>
      curr.cities > withMost.cities ? curr : withMost
    );
    const responseBody = JSON.stringify({ results: countries });

    logCountryWithMostCities();
    test('calls request once', () => {
      expect(request.mock.calls.length).toEqual(1);
    });

    test('logs the country with the most cities', () => {
      request.mock.calls[0][1](undefined, undefined, responseBody);
      expect(console.log.mock.calls.length).toEqual(1);
      expect(console.log.mock.calls[0][0]).toEqual(countryWithMostCities.name);
    });
  });

  test('throws error when request returns an error', () => {
    request.mockReset();
    const error = 'Oh no, an error!';
    logCountryWithMostCities();
    expect(() => request.mock.calls[0][1](error)).toThrow(error);
  });
});
