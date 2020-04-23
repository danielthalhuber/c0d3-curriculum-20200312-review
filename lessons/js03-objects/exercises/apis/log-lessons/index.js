const request = require('request');

/**
 * Log lesson titles to the console
 * @returns {undefined}
 */
const logLessons = (callback) => {
  request('https://c0d3.com/api/lessons', (err, _, body) => {
    if (err) return console.log(err);

    // create a newline separated list of titles
    const lessons = JSON.parse(body).reduce(
      (titles, { title }) => `${titles}\n${title}`,
      ''
    );
    // log the titles
    console.log(lessons);

    // for testing
    if (typeof callback === 'function') callback();
  });
};

module.exports = {
  logLessons,
};
