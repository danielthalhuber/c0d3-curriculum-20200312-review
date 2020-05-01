const request = require('request');
const { writeFile } = require('fs');

/**
 * Write 20 Pokemon names to an HTML file in the current directory
 * @returns {undefined}
 */
const writeHtml20Pokemon = () => {
  request('https://pokeapi.co/api/v2/pokemon/', (err, _, body) => {
    if (err) throw new Error(err);

    // create an HTML string of h1 elements containing the Pokemon names
    const html = JSON.parse(body).results.reduce(
      (names, { name }) => `${names}<h1>${name}</h1>`,
      ''
    );

    // write the HTML string to a file
    writeFile(`${__dirname}/names.html`, html, () => {
      if (err) throw new Error(err);
    });
  });
};

module.exports = {
  writeHtml20Pokemon,
};
