const request = require('request');
const { writeFile } = require('fs');

/**
 * Write 20 Pokemon names to an HTML file in the current directory
 * @returns {undefined}
 */
const writeHtml20Pokemon = (callback) => {
  request('https://pokeapi.co/api/v2/pokemon/', (err, _, body) => {
    if (err) return console.log(err);

    // create an HTML string of h1 elements containing the Pokemon names
    const html = JSON.parse(body).results.reduce(
      (names, { name }) => `${names}<h1>${name}</h1>`,
      ''
    );

    // write the HTML string to a file
    writeFile(`${__dirname}/names.html`, html, () => {
      // for testing
      if (typeof callback === 'function') callback();
    });
  });
};

module.exports = {
  writeHtml20Pokemon,
};
