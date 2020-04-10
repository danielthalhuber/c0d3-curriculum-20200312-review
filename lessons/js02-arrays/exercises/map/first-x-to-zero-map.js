/**
 * Return a copy of the given array with the specified number of elements are set to 0 at the beginning of the array
 * @param {*[]} arr - array to be copied
 * @param {*} count - number of elements at the start of arr to set to 0
 */
const firstXToZero = (arr, count = 0) => arr.map((v, i) => (i < count ? 0 : v));

module.exports = {
  firstXToZero,
};
