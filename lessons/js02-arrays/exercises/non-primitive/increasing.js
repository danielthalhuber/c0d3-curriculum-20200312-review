/**
 * Return true if the array's elements are ordered in a strictly increasing manner
 * @param {number[]} arr - array to be evaluated
 * @param {number} i - current index of arr
 */
const increasing = (arr = [], i = 0) => {
  if (i >= arr.length) return true;
  if (i > 0 && arr[i] <= arr[i - 1]) return false;

  return increasing(arr, i + 1);
};

module.exports = {
  increasing,
};
