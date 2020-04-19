/**
 * Return a string containing HTML divs for each property with a string value
 * @param {object} obj - object to be evaluated
 * @returns {string}
 */
const headers = (obj = {}) => {
  const htmlProp = (k, v) => `<div><h1>${k}<h1><h2>${v}</h2></div>`;

  return Object.entries(obj).reduce((ac, [k, v]) => {
    ac += typeof v === 'string' ? htmlProp(k, v) : '';
    return ac;
  }, '');
};

module.exports = {
  headers,
};
