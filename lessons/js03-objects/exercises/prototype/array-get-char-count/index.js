/**
 * Add the reduce method to Object.prototype
 */
const monkeyPatchArrayGetCharCount = () => {
  /**
   * Array.prototype.getCharCount
   * Return a new object, containing the character counts for all of the strings in the array
   * @returns {object}
   */
  Array.prototype.getCharCount = function () {
    return this.reduce((ac, cv) => {
      cv.split('').forEach((char) => (ac[char] = (ac[char] || 0) + 1));
      return ac;
    }, {});
  };
};

module.exports = {
  monkeyPatchArrayGetCharCount,
};
