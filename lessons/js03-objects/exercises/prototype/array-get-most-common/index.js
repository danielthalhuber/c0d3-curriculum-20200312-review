/**
 * Add the reduce method to Array.prototype
 */
const monkeyPatchArrayGetMostCommon = () => {
  /**
   * Array.prototype.getMostCommon
   * Return the most common value in the array
   * @returns {*}
   */
  Array.prototype.getMostCommon = function () {
    if (this.length === 0) return;

    const max = { key: this[0], value: 1 };

    this.slice(1).reduce((counts, key) => {
      const curr = { key, value: (counts.get(key) || 0) + 1 };
      counts.set(curr.key, curr.value);

      if (curr.value > max.value) {
        [max.key, max.value] = [curr.key, curr.value];
      }
      return counts;
    }, new Map());

    return max.key;
  };
};

module.exports = {
  monkeyPatchArrayGetMostCommon,
};
