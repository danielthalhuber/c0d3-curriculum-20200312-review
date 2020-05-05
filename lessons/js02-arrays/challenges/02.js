/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the corresponding index value
 * @param {function} fun - takes a number and returns a boolean
 * @param {number[]} result - 'private' array of elements with values equal to their index
 * @returns {number[]}
 */

const solution = (fun = () => true, result = []) => {
  if (fun(result.length) === false) {
    result.push(result.length);
    return solution(fun, result);
  }

  return result;
};

module.exports = {
  solution,
};
