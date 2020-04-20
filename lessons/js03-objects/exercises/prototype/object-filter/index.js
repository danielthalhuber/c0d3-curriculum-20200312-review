/**
 * Add the filter method to Object.prototype
 */
const monkeyPatchObjectFilter = () => {
  /**
   * Object.prototype.filter
   * Return a new object, retaining only the properties of the original object that pass the given test
   * @param {function} filterTest - the function to call for each property
   * @returns {object}
   */
  Object.prototype.filter = function (filterTest) {
    if (typeof filterTest !== 'function') return;

    return Object.entries(this).reduce((ac, [key, value]) => {
      if (filterTest(key, value)) ac[key] = value;
      return ac;
    }, {});
  };
};

module.exports = {
  monkeyPatchObjectFilter,
};
