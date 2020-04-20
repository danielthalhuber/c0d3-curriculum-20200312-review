/**
 * Add the reduce method to Object.prototype
 */
const monkeyPatchObjectReduce = () => {
  /**
   * Object.prototype.reduce
   * Return a new object, retaining only the properties of the original object that pass the given test
   * @param {function} reducer - the function to call for each property
   * @returns {*}
   */
  Object.prototype.reduce = function (reducer, iv) {
    if (typeof reducer !== 'function') return;

    const entries = Object.entries(this);
    if (iv === undefined) iv = entries.shift();

    return entries.reduce((ac, [k, v], i) => reducer(ac, k, v, i, this), iv);
  };
};

module.exports = {
  monkeyPatchObjectReduce,
};
