/**
 * Return an array of values containing values from each array in the given array at a common, given index
 * @param {*[][]} arr - arrays providing values at common indices to be returned
 * @param {number} c - current index of arr
 * @param {number} r - common index of elements from each array to include in result
 * @param {*[]} result - values from elements at the common index
 */
const onlyIndex = (arr = [], c = -1, r = 0, result = []) => {
  if (c < 0 || r >= arr.length) return result;

  result.push(arr[r][c]);
  return onlyIndex(arr, c, r + 1, result);
};

module.exports = {
  onlyIndex,
};
