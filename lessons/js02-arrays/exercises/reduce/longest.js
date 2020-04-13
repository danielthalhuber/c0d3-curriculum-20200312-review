/**
 * Return the
 * @param {string[]} arr - array of strings to be evaluated
 */
const longest = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((ac, cv) => (ac.length > cv.length ? ac : cv), -1);
};

module.exports = {
  longest,
};
