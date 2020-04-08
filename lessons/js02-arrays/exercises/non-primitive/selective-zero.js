/**
 * Transform the values in an array by setting all values equal to the specified number to 0
 * @param {*[]} arr - Array with values to be transformed
 * @param {number} num - Number to transform
 * @param {number} i - Current index of array
 */
const selectiveZero = (arr = [], num, i = 0) => {
  if (i >= arr.length) return;
  if (arr[i] === num) arr[i] = 0;
  return selectiveZero(arr, num, i + 1);
};

module.exports = {
  selectiveZero,
};
