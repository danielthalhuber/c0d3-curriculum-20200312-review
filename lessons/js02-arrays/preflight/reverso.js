/**
 * Return the given string in reversed order
 * @param {string} str - String to be reversed
 * @param {number} i - Offset from end/length of str, corresponding to the index of the character to be reversed
 * @param {string} result - The reversed string
 * @returns {string}
 */
const reverso = (str = '', i = 1, result = '') => {
  if (i > str.length) return result;

  return reverso(str, i + 1, result + str[str.length - i]);
};

module.exports = {
  reverso,
};
