const request = require('request');
const { writeFile } = require('fs');

/**
 * Write the lesson titles to an HTML file in the current directory
 * @returns {undefined}
 */
const writeHtmlLessons = () => {
  request('https://c0d3.com/api/lessons', (err, _, body) => {
    if (err) throw new Error(err);

    // create an HTML string of h1 elements containing the lesson titles
    const lessons = JSON.parse(body).reduce(
      (titles, { title }) => `${titles}<h1>${title}</h1>`,
      ''
    );
    // write the HTML string to a file
    writeFile(`${__dirname}/lessons.html`, lessons, () => {
      if (err) throw new Error(err);
    });
  });
};

module.exports = {
  writeHtmlLessons,
};
