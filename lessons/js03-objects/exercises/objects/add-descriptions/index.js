/**
 * Add descriptions to objects in an array using the given description map
 * @param {[object[]]} arr - array of objects with name properties
 * @param {object} obj - object mapping names to descriptions
 * @returns {undefined}
 */
const addDescriptions = (arr = [], obj = {}) =>
  arr.forEach((e) => {
    if (obj.hasOwnProperty(e.name)) e.description = obj[e.name];
  });

module.exports = {
  addDescriptions,
};
