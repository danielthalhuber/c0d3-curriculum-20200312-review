/**
 * Return an array of strings where each is the first letter of the corresponding string in the given array
 * @param {string[]} arr - array of strings to be evaluated
 */
const firstLetters = (arr = []) => arr.map((str) => str[0]);

module.exports = {
  firstLetters,
};
