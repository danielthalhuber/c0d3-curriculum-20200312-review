/**
 * Return the key of the longest string value in the given object
 * @param {object} obj - object with values to be evaluated
 * @returns {string\undefined}
 */
const keyOfLongestString = (obj = {}) => {
  const propWithLongestVal = Object.entries(obj).reduce(
    (ac, cv) => {
      return typeof cv[1] === 'string' && cv[1].length >= ac[1].length
        ? cv
        : ac;
    },
    [, '']
  );

  return typeof propWithLongestVal[1] === 'string'
    ? propWithLongestVal[0]
    : undefined;
};

module.exports = {
  keyOfLongestString,
};
