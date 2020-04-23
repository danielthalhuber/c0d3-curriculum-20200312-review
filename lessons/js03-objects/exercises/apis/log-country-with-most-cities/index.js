const request = require('request');

/**
 * Log country with most cities to the console
 * @returns {undefined}
 */
const logCountryWithMostCities = (callback) => {
  request('https://api.openaq.org/v1/countries', (err, _, body) => {
    if (err) return console.log(err);

    // find the name of the country with the most cities
    const countryWithMostCities = JSON.parse(body).results.reduce((max, curr) =>
      max.cities > curr.cities ? max : curr
    );

    // log the name of the country with the most cities
    console.log(countryWithMostCities.name);

    // for testing
    if (typeof callback === 'function') callback();
  });
};

module.exports = {
  logCountryWithMostCities,
};
