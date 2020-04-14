/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {function[]} arr - functions to be called after the given delay
 * @param {number} time - milliseconds to delay function calls
 * @param {number} i - 'private', indicates current index of arr
 */

const solution = (arr, time, i = 0) => {
  if (i >= arr.length) return;

  setTimeout(arr[i], time);
  return solution(arr, time, i + 1);
};

module.exports = {
  solution,
};
