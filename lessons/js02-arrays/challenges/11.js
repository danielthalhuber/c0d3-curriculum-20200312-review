/**
 * Creates Array.prototype.cFind that has the same functionality as find
 *   If nothing was found, return undefined (which should be default
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

const solution = () => {
  /**
   * Return the value of the first element of the array for which the callback function returns true
   * @param {function} cb - the function used to test the elements
   * @param {object} thisArg - value of this to be used by cb
   * @param {number} i - 'private', corresponds to current index of array
   * @returns {*[]|undefined}
   */
  Array.prototype.cFind = function (cb, thisArg = this, i = 0) {
    if (!cb) {
      throw new TypeError(
        'missing argument 0 when calling function Array.prototype.cFind'
      );
    }
    if (i >= this.length) return;
    if (cb.call(thisArg, this[i], i, this)) return this[i];

    return this.cFind(cb, thisArg, i + 1);
  };
};

module.exports = {
  solution,
};
