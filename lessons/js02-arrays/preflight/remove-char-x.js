/**
 * Return the given string, less the character at the given index
 * @param {string} str - String containing the character to be removed
 * @param {number} i - Index of the character to remove from str
 * @param {number} iCurr - Index of the current recursive iteration
 * @param {string} result - Resulting string with missing character
 * @returns {string}
 */
const removeCharX = (str = '', i = 0, iCurr = 0, result = '') => {
  if (iCurr >= str.length) return result;

  const nextChar = i !== iCurr ? str[iCurr] : '';
  return removeCharX(str, i, iCurr + 1, result + nextChar);
};

module.exports = {
  removeCharX,
};
