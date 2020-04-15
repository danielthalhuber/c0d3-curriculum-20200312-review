/**
 * Return an array of values returned by the given array of functions
 * @param {functin[]} arr - array of functions
 * @returns {*[]}
 */
const getReturnedValues = (arr = []) => arr.map((cv) => cv());

module.exports = {
  getReturnedValues,
};
