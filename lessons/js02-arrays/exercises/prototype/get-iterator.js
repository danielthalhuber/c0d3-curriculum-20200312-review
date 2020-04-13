/**
 * Add a prototype method
 */
const init = () => {
  /**
   * Return an iterator for the array
   */
  Array.prototype.getIterator = function () {
    let i = 0;

    return () => this[i++ % this.length];
  };
};

module.exports = {
  init,
};
