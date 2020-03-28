/**
 * Return true if the given strings only differ by three characters, false otherwise
 * @param {string} str1 - The first of two strings to compare
 * @param {string} str2 - The second of two strings to compare
 * @param {number} i - Index of the current recursive iteration
 * @param {number} count - Count of different characters
 * @returns {boolean}
 */
const less3Diff = (str1 = '', str2 = '', i = 0, count = 0) => {
  if (count > 2) return false;
  if (i >= str1.length) return true;

  return less3Diff(str1, str2, i + 1, count + 1 * (str1[i] !== str2[i]));
};

module.exports = {
  less3Diff,
};
