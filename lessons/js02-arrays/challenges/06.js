/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {function[]} arr - functions to be called sequentially after delays
 * @param {number} time - milliseconds of delay before a function call
 * @param {number} i - 'private' number corresponding to current index of arr
 */

const solution = (arr = [], time = 0, i = 0) => {
  if (i >= arr.length) return;

  setTimeout(() => {
    arr[i]();
    solution(arr, time, i + 1);
  }, time);
};

module.exports = {
  solution,
};
