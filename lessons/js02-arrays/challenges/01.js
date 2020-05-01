/**
 * Write a function called solution that
 *   Takes in a number
 *   returns an array with the length equal to the input number
 *
 * Every element in the array must numbered with the correct index:
 *   0,1,2,3,4...
 * @param {number} length - length of the array to generate
 * @param {number[]} result - 'private', the array of index values to return
 * @returns {array}
 */

const solution = (length = 0, result = []) => {
  if (length < 1) return result;

  result.push(result.length);
  return solution(length - 1, result);
};

module.exports = {
  solution,
};
