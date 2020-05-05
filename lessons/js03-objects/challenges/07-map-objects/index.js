/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
 */

const solution = () => {
  Object.prototype.map = function (cb, thisArg = this) {
    return Object.entries(this).map(([key, value], i, arr) =>
      cb.call(thisArg, key, value, i, arr)
    );
  };
};

module.exports = {
  solution,
};
