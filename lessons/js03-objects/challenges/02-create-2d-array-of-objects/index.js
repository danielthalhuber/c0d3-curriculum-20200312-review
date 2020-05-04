/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {number} num1
 * @param {number} num2
 * @return {object[]}
 */

const solution = (num1, num2) =>
  Array(num1)
    .fill(null)
    .map((_, r) =>
      Array(num2)
        .fill(null)
        .map((_, c) => ({ x: c, y: r }))
    );

module.exports = {
  solution,
};
