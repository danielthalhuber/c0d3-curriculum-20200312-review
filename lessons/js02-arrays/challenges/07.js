/**
 * Replicate Array.prototype.forEach and call it cForEach
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_forEach.asp
 */

const solution = () => {
  /**
   * Call the given function once for each element in the array
   * @param {function} cb - the function to call for each element
   * @param {object} thisArg - value of this to be used by cb
   * @param {number} i - 'private', corresponds to current index of array
   */
  Array.prototype.cForEach = function (cb, thisArg = this, i = 0) {
    if (!cb || i >= this.length) return;

    cb.call(thisArg, this[i], i, this);
    return this.cForEach(cb, thisArg, i + 1);
  };
};

module.exports = {
  solution,
};
