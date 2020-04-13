/**
 * Add a prototype method
 */
const init = () => {
  /**
   * Return the sum of the numbers in an array of numbers
   * @param {number} i - private, number indicating current index
   * @param {number} result - private, number sum of number elements
   */
  Array.prototype.sum = function (i = 0, result = 0) {
    if (i >= this.length) return result;

    return this.sum(i + 1, result + this[i]);
  };
};

module.exports = {
  init,
};
