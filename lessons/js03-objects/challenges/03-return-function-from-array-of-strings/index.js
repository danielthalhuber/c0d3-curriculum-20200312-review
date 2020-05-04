/**
 * write a function called solution that takes in an array of strings and returns a function. when the returned function is called (with an object with many keys), it will return an object with only keys that exist in the input array.
 * @param {array} arr
 * @return {object}
 */

const solution = (arr = []) => (obj) =>
  Object.entries(obj)
    .filter(([k]) => arr.includes(k))
    .reduce((ac, [k, v]) => ({ ...ac, [k]: v }), {});

module.exports = {
  solution,
};
