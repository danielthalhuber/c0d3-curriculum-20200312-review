/**
 * Return a copy of the given array, transforming odd elements to 0
 * @param {number[]} arr - the array to be copied
 */
const oddToZero = (arr = []) => arr.map((el) => (el % 2 === 0 ? el : 0));

module.exports = {
  oddToZero,
};
