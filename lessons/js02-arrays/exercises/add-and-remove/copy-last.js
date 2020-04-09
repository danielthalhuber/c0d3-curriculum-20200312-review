/**
 * Return an array which is a copy of a given array, excluding the first number of elements specified
 * @param {*[]} arr - array to be copied
 * @param {number} exclude - count of elements to be excluded
 * @param {number} i - current index of arr
 * @param {*[]} result - copied array
 */
const copyLast = (arr = [], exclude = 0, i = 0, result = []) => {
  if (i >= arr.length) return result;

  if (i >= exclude) result.push(arr[i]);
  return copyLast(arr, exclude, i + 1, result);
};

module.exports = {
  copyLast,
};
