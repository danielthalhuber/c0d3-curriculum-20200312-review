/**
 * Add the reduce method to Array.prototype
 */
const monkeyPatchArraySetMaxSize = () => {
  /**
   * Array.prototype.setMaxSize
   * Set the maxSize value of an array, beyond which length no additional elements can be added
   * @returns {*}
   */
  Array.prototype.setMaxSize = function (maxSize) {
    if (maxSize === undefined) return;

    // add maxSize
    if (!this.hasOwnProperty('maxSize')) this.maxSize = maxSize;

    // add push
    if (!this.hasOwnProperty('push')) {
      this._push = this.push;

      this.push = function (value) {
        if (this.length < this.maxSize) this._push(value);
        return this.length;
      };
    }

    // add unshift
    if (!this.hasOwnProperty('unshift')) {
      this._unshift = this.unshift;

      this.unshift = function (value) {
        if (this.length < this.maxSize) this._unshift(value);
        return this.length;
      };
    }
  };
};

module.exports = {
  monkeyPatchArraySetMaxSize,
};
