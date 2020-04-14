/**
 * Return the last element in the given array
 * @param {*[]} ar - array to be evaluated
 * @returns {*}
 */
const last = (ar = []) => ar[ar.length - 1];

/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array are 0.
 * @param {number} row - length of array to be returned
 * @param {number} col - length of 0 value array elements of the array to be returned
 * @param {number[]} ar - the array to be returned
 * @returns {array}
 */

const solution = (row = 0, col = 0, ar = []) => {
  if (ar.length >= row && (col === 0 || last(ar).length === col)) return ar;

  if (!ar.length || last(ar).length === col) ar.push([]);
  if (last(ar).length < col) last(ar).push(0);
  return solution(row, col, ar);
};

module.exports = {
  solution,
};
