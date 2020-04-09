/**
 * Removes elements with a specified value from the give array, and then returns the array
 * @param {*[]} arr - array to be evaluated
 * @param {*} remove - value of elements to be removed
 * @param {number} i - current index of arr
 */
const removeElement = (arr = [], remove, i = 0) => {
  if (i >= arr.length) return arr;

  if (arr[i] === remove) arr.splice(i--, 1);
  return removeElement(arr, remove, i + 1);
};

module.exports = {
  removeElement,
};
