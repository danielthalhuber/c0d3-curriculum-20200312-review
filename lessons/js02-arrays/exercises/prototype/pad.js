/**
 * Add a prototype method
 */
const init = () => {
  /**
   * Append the given string to the array the specified number of times
   * @param {string} str - the string to append
   * @param {number} c - number of times to append the string
   */
  Array.prototype.pad = function (str, c = 0) {
    if (c < 1 || str === undefined) return;

    this.push(str);
    return this.pad(str, c - 1);
  };
};

module.exports = {
  init,
};
