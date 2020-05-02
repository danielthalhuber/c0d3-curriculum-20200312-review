const fetch = require('node-fetch');
const {
  promises: { writeFile },
} = require('fs');

/**
 * Log lesson titles to the console
 * @returns {undefined}
 */
const logLessons = () =>
  fetch('https://c0d3.com/api/lessons')
    .then((response) => response.json())
    .then((data) => {
      const titles = `<h1>${data
        .map(({ title }) => title)
        .join('</h1><h1>')}</h1>`;

      return writeFile('./lessons.html', titles);
    })
    .catch((err) => {
      throw new Error(err);
    });

module.exports = {
  logLessons,
};
