const { writeFile } = require('fs');

/**
 * Make the given number of files (plus one)
 * @param {number} number count (less one) of files to create
 * @returns {undefined}
 */
const makeFiles = (number = -1) => {
  if (number < 0) return;

  writeFile(`${__dirname}/trainer${number}.txt`, "Gotta catch 'em all", () => {
    makeFiles(number - 1);
  });
};

module.exports = {
  makeFiles,
};
