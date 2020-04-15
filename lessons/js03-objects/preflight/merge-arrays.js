/**
 * Return a new array formed by merging the two given arrays in order
 * @param {*[]} ar1 - first array to be merged
 * @param {*[]} ar2 - second array to be merged
 * @returns {*[]}
 */
const mergeArrays = (ar1 = [], ar2 = []) => [...ar1, ...ar2];

module.exports = {
  mergeArrays,
};
