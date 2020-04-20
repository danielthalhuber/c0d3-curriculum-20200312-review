/**
 * Add the forEach method to Object.prototype
 */
const monkeyPatchObjectForEach = () => {
  /**
   * Object.prototype.forEach
   * Call the given callback function for each property in the object
   * @param {function} callback - the function to call for each property
   * @returns {undefined}
   */
  Object.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') return;

    Object.entries(this).forEach(([key, value], index) =>
      callback(key, value, index)
    );
  };
};

module.exports = {
  monkeyPatchObjectForEach,
};
