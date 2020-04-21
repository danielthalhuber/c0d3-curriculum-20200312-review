/**
 * Add the reduce method to Array.prototype
 */
const monkeyPatchArrayRemoveDupes = () => {
  /**
   * Array.prototype.removeDupes
   * Return a copy of the original array, removing any duplicate elements
   * @returns {*[]}
   */
  Array.prototype.removeDupes = function () {
    if (this.length === 0) return [];

    return [...new Set(this).values()];
  };
};

module.exports = {
  monkeyPatchArrayRemoveDupes,
};
