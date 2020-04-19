const { keyOfLongestString } = require('../key-of-longest-string');

/**
 * Remove the property with the longest string value from the given object
 * @param {object} obj - object to be evaluated
 * @returns {undefined}
 */
const removeLongestString = (obj = {}) => {
  delete obj[keyOfLongestString(obj)];
};

module.exports = {
  removeLongestString,
};
