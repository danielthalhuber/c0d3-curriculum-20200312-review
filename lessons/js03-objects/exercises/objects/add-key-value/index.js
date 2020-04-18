/**
 * Add a new property to the given object with the specified key and value
 * @param {object} obj - target object for new property
 * @param {string} key - name of new property
 * @param {*} value - value of new property
 * @returns {undefined}
 */
const addKV = (obj, key, value) => {
  if (typeof obj !== 'object') return;
  obj[key] = value;
};

module.exports = {
  addKV,
};
