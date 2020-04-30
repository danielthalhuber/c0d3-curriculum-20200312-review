const request = require('request');

/**
 * Log country with most cities to the console
 * @returns {undefined}
 */
const logCountryWithMostCities = () => {
  request('https://api.openaq.org/v1/countries', (err, _, body) => {
    if (err) throw new Error(err);

    // find the name of the country with the most cities
    const countryWithMostCities = JSON.parse(body).results.reduce((max, curr) =>
      max.cities > curr.cities ? max : curr
    );

    // log the name of the country with the most cities
    console.log(countryWithMostCities.name);
  });
};

module.exports = {
  logCountryWithMostCities,
};
