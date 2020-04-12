/**
 * Return the largest number in the array
 * @param {number[]} arr - the array to be evaluated
 */
const largest = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((ac, cv) => (ac > cv ? ac : cv), Number.NEGATIVE_INFINITY);
};

module.exports = {
  largest,
};
