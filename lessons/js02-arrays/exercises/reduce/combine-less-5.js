/**
 * Return the concatenation of all strings in the given array with length < 5
 * @param {string[]} arr - array of strings to be concatenated
 */
const combineLess5 = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((ac, cv) => ac + (cv.length < 5 ? cv : ''), '');
};

module.exports = {
  combineLess5,
};
