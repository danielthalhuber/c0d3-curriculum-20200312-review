/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr
 * @param {object} obj
 * @returns {array}
 */

const solution = (arr, obj) =>
  arr.reduce(
    (result, key) => (obj.hasOwnProperty(key) ? [...result, obj[key]] : result),
    []
  );

module.exports = {
  solution,
};
