const fetch = require('node-fetch');
const {
  promises: { writeFile },
} = require('fs');

/**
 * Write 20 Pokemon names to an HTML file in the current directory
 * @returns {undefined}
 */
const writeHtml20Pokemon = () =>
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((data) => {
      // create an HTML string of h1 elements containing the Pokemon names
      const html = data.results.map(({ name }) => `<h1>${name}</h1>`).join('');

      // write the HTML string to a file
      return writeFile('./names.html', html);
    })
    .catch((err) => {
      throw new Error(err);
    });

module.exports = {
  writeHtml20Pokemon,
};
