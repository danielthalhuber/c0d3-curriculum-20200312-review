/**
 * Return the largest number in arr
 * @param {number[]} arr - array of numbers
 * @param {number} i - current index of arr
 * @param {number} max - larges number currently known in arr
 */
const largest = (arr = [], i = 0, max = arr[0]) => {
  if (i >= arr.length) return max;

  if (arr[i] > max) max = arr[i];
  return largest(arr, i + 1, max);
};

module.exports = {
  largest,
};
