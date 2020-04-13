/**
 * Add a prototype method
 */
const init = () => {
  /**
   * Return a copy of an array of numbers, retaining only the even numbers
   * @param {number} i - private, number indicating current index
   * @param {number[]} result - private, array of even numbers
   */
  Array.prototype.getEvens = function (i = 0, result = []) {
    if (i >= this.length) return result;

    if (this[i] % 2 === 0) result.push(this[i]);
    return this.getEvens(i + 1, result);
  };
};

module.exports = {
  init,
};
