/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2) =>
  Object.entries(obj1).reduce(
    (ac, [key, value]) => ({
      ...ac,
      [key]: obj2.hasOwnProperty(key) ? obj2[key](value) : value,
    }),
    {}
  );

module.exports = {
  solution,
};
