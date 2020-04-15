/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  /**
   * Call the given function once for each element in the array, if the function returns true, included the element in the returned array
   * @param {function} cb - the function to call for each element
   * @param {object} thisArg - value of this to be used by cb
   * @param {number} i - 'private', corresponds to current index of array
   * @param {*[]} res - 'private', array of filtered results
   * @returns {*[]}
   */
  Array.prototype.cFilter = function (cb, thisArg = this, i = 0, res = []) {
    if (!cb) {
      throw new TypeError(
        'missing argument 0 when calling function Array.prototype.cFilter'
      );
    }
    if (i >= this.length) return res;

    if (cb.call(thisArg, this[i], i, this)) res.push(this[i]);
    return this.cFilter(cb, thisArg, i + 1, res);
  };
};

module.exports = {
  solution,
};
