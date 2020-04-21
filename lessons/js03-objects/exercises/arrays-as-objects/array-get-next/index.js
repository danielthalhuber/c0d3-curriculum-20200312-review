/**
 * Add the reduce method to Array.prototype
 */
const monkeyPatchArrayGetNext = () => {
  /**
   * Array.prototype.getNext
   * Return the next element in the array
   * @returns {*}
   */
  Array.prototype.getNext = function () {
    if (!this.hasOwnProperty('nextIndex')) this.nextIndex = 0;
    return this[this.nextIndex++ % this.length];
  };
};

module.exports = {
  monkeyPatchArrayGetNext,
};
