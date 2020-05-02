const fetch = require('node-fetch');

/**
 * Log country with most cities to the console
 * @returns {undefined}
 */
const logCountryWithMostCities = () =>
  fetch('https://api.openaq.org/v1/countries')
    .then((response) => response.json())
    .then((data) => {
      // find the name of the country with the most cities
      const countryWithMostCities = data.results.reduce((max, curr) =>
        max.cities > curr.cities ? max : curr
      );

      // log the name of the country with the most cities
      console.log(countryWithMostCities.name);
    })
    .catch((err) => {
      throw new Error(err);
    });

module.exports = {
  logCountryWithMostCities,
};
