/**
 * Returns a copy of the given array where the elements are in reverse order
 * @param {*[]} arr - array to be copied
 * @param {number} i - index offset from last index of arr
 * @param {*[]} reverse - reverse copy of arr
 */
const copyReverse = (arr = [], i = 0, reverse = []) => {
  if (i >= arr.length) return reverse;

  reverse.push(arr[arr.length - (1 + i)]);
  return copyReverse(arr, i + 1, reverse);
};

module.exports = {
  copyReverse,
};
