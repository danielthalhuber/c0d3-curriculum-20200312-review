/**
 * Return a function that calls the given function after the specified delay
 * @param {number} delay - Milliseconds to delay calling fun
 * @param {function} fun - Function to call after delay
 * @returns {function}
 */
const delayAndCall = (delay = 0, fun = () => {}) => {
  return () => setTimeout(fun, delay);
};

module.exports = {
  delayAndCall,
};
