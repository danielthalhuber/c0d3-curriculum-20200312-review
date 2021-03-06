/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a letter,
 *   and returns the number of times the letter shows up in the string
 * @param {string} str
 * @param {string} char
 * @returns {number}
 */

const solution = (str, char, count = 0, i = 0) => {
  if (i >= str.length) return count;

  count += str[i] === char ? 1 : 0;
  return solution(str, char, count, i + 1);
};

module.exports = {
  solution,
};
