/**
 * Return the count of occurrences of the specified value in the given array
 * @param {*[]} arr - the array to be evaluated
 * @param {*} value - the value to count in arr
 */
const matches = (arr, value) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((ac, cv) => ac + 1 * (cv === value), 0);
};

module.exports = {
  matches,
};
