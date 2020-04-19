/**
 * Return a string containing a comma separated list of the object's string values
 * @param {object} obj - object to be evaluated
 * @returns {string}
 */
const commas = (obj = {}) =>
  Object.values(obj).reduce((ac, cv) => {
    ac += ac.length > 0 ? ',' : '';
    ac += typeof cv === 'string' ? cv : '';
    return ac;
  }, '');

module.exports = {
  commas,
};
