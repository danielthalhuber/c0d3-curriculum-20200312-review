/**
 * Return the sum of the numbers in the given array
 * @param {number[]} arr - array of numbers to sum
 */
const sum = (arr) =>
  Array.isArray(arr) ? arr.reduce((ac, cv) => ac + cv, 0) : undefined;

module.exports = {
  sum,
};
