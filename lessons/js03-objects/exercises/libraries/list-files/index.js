const { writeFile, readdir } = require('fs');

/**
 * Write an HTML file containing the names of the files in the current directory (in h1 tags)
 * @returns {undefined}
 */
const listFiles = () => {
  readdir(__dirname, (err, files) => {
    if (err) throw new Error(err);

    const html = files.reduce((ac, file) => `${ac}<h1>${file}</h1>`, '');
    writeFile(`${__dirname}/files.html`, html);
  });
};

module.exports = {
  listFiles,
};
