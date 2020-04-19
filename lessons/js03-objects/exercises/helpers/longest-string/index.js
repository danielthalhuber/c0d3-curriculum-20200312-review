/**
 * Return the longest string value in the given object
 * @param {object} obj - object with values to be evaluated
 * @returns {string}
 */
const longestString = (obj = {}) => {
  return Object.values(obj).reduce((ac, cv) => {
    return typeof cv === 'string' && cv.length > ac.length ? cv : ac;
  }, '');
};

module.exports = {
  longestString,
};
