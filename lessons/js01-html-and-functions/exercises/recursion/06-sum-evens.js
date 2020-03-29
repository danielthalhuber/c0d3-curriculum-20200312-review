/*
  Goal: Write a function called `sumEvens` that adds up all the even numbers from 2 to the given number

  Examples:

  - `sumEvens()` returns 0
  - `sumEvens(-1)` returns 0
  - `sumEvens(1)` returns 0
  - `sumEvens(2)` returns 2
  - `sumEvens(4)` returns 6

  Signature:

  - Parameters:
    - `n`: public, number, indicates the last possible number to include in the sum
    - `i`: private, number, indicates the current iteration
    - `result`: private, number, contains the current sum of even numbers
  - Return: `result`, number

  Explanation:

  - Starting with, `i = 2`, and `result = 0`
  - Base case: if `i > n`, return `result`
  - Recursive case: call `sumEvens`:
    - Incrementing `i` by one
    - Increasing `result` by `i` when it is even

  Code:
*/
const sumEvens = (n = 0, i = 2, result = 0) => {
  if (i > n) return result;
  return sumEvens(n, i + 1, result + (i % 2 === 0 && i));
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: 'sumEvens() returns 0', args: [] },
    { desc: 'sumEvens(-1) returns 0', args: [-1] },
    { desc: 'sumEvens(1) returns 0', args: [1] },
    { desc: 'sumEvens(2) returns 2', args: [2] },
    { desc: 'sumEvens(4) returns 6', args: [4] },
  ];

  parameters.forEach(({ desc, args }) => console.log(desc, sumEvens(...args)));
};

module.exports = {
  code: sumEvens,
  test,
};
