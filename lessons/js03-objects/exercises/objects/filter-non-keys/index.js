/**
 * Return a new array containing string values from the given array which are also keys of the given object
 * @param {*[]} arr - array to be filtered
 * @param {object} obj - object used to filter arr
 * @returns {string[]}
 */
const filterNonKeys = (arr = [], obj = {}) =>
  arr.filter((e) => obj.hasOwnProperty(e));

module.exports = {
  filterNonKeys,
};
