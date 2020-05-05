/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (No duplicates)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num, comps = {}) => {
  if (arr.length <= 0) return false;

  const i = arr.length - 1;
  if (comps.hasOwnProperty(num - arr[i])) return true;

  return solution(arr.slice(0, -1), num, { ...comps, [arr[i]]: i });
};

module.exports = {
  solution,
};
