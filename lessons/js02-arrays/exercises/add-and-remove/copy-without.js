/**
 * Return an array from the given array, excluding elements with the specified value
 * @param {*[]} arr - array to be copied
 * @param {*} exclude - value of elements to be excluded
 * @param {number} i - current index of arr
 * @param {*[]} result - copied array
 */
const copyWithout = (arr = [], exclude, i = 0, result = []) => {
  if (i >= arr.length) return result;

  if (arr[i] !== exclude) result.push(arr[i]);
  return copyWithout(arr, exclude, i + 1, result);
};

module.exports = {
  copyWithout,
};
