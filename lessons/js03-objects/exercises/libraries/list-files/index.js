const { writeFile, readdir } = require('fs');

/**
 * Write an HTML file containing the names of the files in the current directory (in h1 tags)
 * @returns {undefined}
 */
const listFiles = () => {
  readdir('./', (err, files) => {
    if (err) throw new Error(err);

    const html = files.reduce((ac, file) => `${ac}<h1>${file}</h1>`, '');
    writeFile('./files.html', html, (err) => {
      if (err) throw new Error(err);
    });
  });
};

module.exports = {
  listFiles,
};
