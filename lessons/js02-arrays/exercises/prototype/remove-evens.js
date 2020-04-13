/**
 * Add a prototype method
 */
const init = () => {
  /**
   * Remove even numbers from the array
   * @param {number} i - private, current index of the array
   */
  Array.prototype.removeEvens = function (i = 0) {
    if (i >= this.length) return;

    if (this[i] % 2 === 0) {
      this.splice(i, 1);
      i -= 1;
    }
    return this.removeEvens(i + 1);
  };
};

module.exports = {
  init,
};
