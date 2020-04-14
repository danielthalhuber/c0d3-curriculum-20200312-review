/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  /**
   * Call the given function once for each element in the array, returning an array with the results of each function call
   * @param {function} cb - the function to call for each element
   * @param {object} thisArg - value of this to be used by cb
   * @param {number} i - 'private', corresponds to current index of array
   * @param {*[]} res - 'private', contains cb return values
   * @returns {*[]}
   */
  Array.prototype.cMap = function (cb, thisArg = this, i = 0, res = []) {
    if (!cb) {
      throw new TypeError(
        'missing argument 0 when calling function Array.prototype.cMap'
      );
    }

    if (i >= this.length) return res;

    res.push(cb.call(thisArg, this[i], i, this));
    return this.cMap(cb, thisArg, i + 1, res);
  };
};

module.exports = {
  solution,
};
