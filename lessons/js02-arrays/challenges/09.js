/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  /**
   * Call the given function once for each element in the array, resulting in a single value that is returned after the function on the last element
   * @param {function} cb - the function to call for each element
   * @param {*} iv - initial value for each call of cb
   * @param {object} thisArg - value of this to be used by cb
   * @param {number} i - 'private', corresponds to current index of array
   * @returns {*[]}
   */
  Array.prototype.cReduce = function (cb, iv, thisArg = this, i = 0) {
    if (!cb) {
      throw new TypeError(
        'missing argument 0 when calling function Array.prototype.cReduce'
      );
    }

    if (i === 0 && iv === undefined) {
      if (this.length === 0) {
        throw new TypeError('cReduce of empty array with no initial value');
      }
      return this.cReduce(cb, this[0], thisArg, 1);
    }

    if (i >= this.length) return iv;

    iv = cb.call(thisArg, iv, this[i], i, this);
    return this.cReduce(cb, iv, thisArg, i + 1);
  };
};

module.exports = {
  solution,
};
