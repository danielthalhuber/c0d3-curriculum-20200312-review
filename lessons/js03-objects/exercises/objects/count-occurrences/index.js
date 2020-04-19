/**
 * Return an object containing counts of each value in the given array
 * @param {string|number[]} arr - array of values to count
 * @return {object}
 */
const countOccurrences = (arr = []) =>
  arr.reduce((ac, cv) => {
    ac[cv] = (ac[cv] || 0) + 1;
    return ac;
  }, {});

module.exports = {
  countOccurrences,
};
