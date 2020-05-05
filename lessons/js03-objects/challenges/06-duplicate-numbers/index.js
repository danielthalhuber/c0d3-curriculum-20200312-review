/**
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
 */

const solution = (arr) =>
  Object.entries(
    arr.reduce((freq, num) => ({ ...freq, [num]: (freq[num] || 0) + 1 }), {})
  )
    .filter(([_, count]) => count > 1)
    .map(([num]) => +num);

module.exports = {
  solution,
};
