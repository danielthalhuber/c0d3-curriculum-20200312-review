/**
 * Return a copy of the given array of strings, appending the given string to each element
 * @param {string[]} arr - array of strings to be copied
 * @param {string} str - string to be appended
 */
const append = (arr = [], str = '') => arr.map((val) => val + str);

module.exports = {
  append,
};
