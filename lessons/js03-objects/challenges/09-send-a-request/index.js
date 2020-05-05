const fetch = require('node-fetch');
const {
  promises: { writeFile },
} = require('fs');

/**
 * Write an HTML file to the current directory containing the names and images of the first 20 Pokemon returned by the pokeapi.co v2 API
 * @returns {undefined}
 */
const writeHtmlFor20Pokemon = (fileName) =>
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((data) =>
      Promise.all(
        data.results.map(({ url }) =>
          fetch(url)
            .then((response) => response.json())
            .then(
              ({ name, sprites: { front_default } }) =>
                `<h1>${name}</h1>\n<img src="${front_default}" />\n`
            )
        )
      )
    )
    .then((html) => {
      return writeFile(`./${fileName}`, html.join(''));
    })
    .catch((err) => {
      throw new Error(err);
    });

module.exports = {
  writeHtmlFor20Pokemon,
};
