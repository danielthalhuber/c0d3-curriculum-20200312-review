/*
  Goal:

  - Write a function called `tryNumRange` that takes in a number and a function and calls the function with every number from 1 to the input number. If any of these return true, return true; if they all return false, return false

  Examples:

  - `tryNumRange()` returns `false`
  - `tryNumRange(-1, e => e < 0)` returns `false`
  - `tryNumRange(1, e => e % 2 === 0)` returns `false`
  - `tryNumRange(2, e => e % 2 === 0)` returns `true`
  - `tryNumRange(5, e => e < 0)` returns `false`

  Signature:

  - Parameters:
    - `n`, public, number, indicates last number in range starting at 1
    - `f`, public, function, takes one numeric argument, returns a boolean
    - `i`, private, number, initialized to 1, indicates current iteration
  - Return: boolean

  Explanation:

  - Start with `i = 1`
  - Base case: if `f(i)` or `i > n`, return `f(i)`
  - Recursive case: return `tryNumRange`, incrementing `i` by 1

  Code:
*/
const tryNumRange = (n = 0, f = () => false, i = 1) => {
  if (f(i) || i > n) return f(i);

  return tryNumRange(n, f, i + 1);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: '`tryNumRange()` returns `false`', args: [] },
    {
      desc: '`tryNumRange(-1, e => e < 0)` returns `false`',
      args: [-1, e => e < 0],
    },
    {
      desc: '`tryNumRange(1, e => e % 2 === 0)` returns `false`',
      args: [1, e => e % 2 === 0],
    },
    {
      desc: '`tryNumRange(2, e => e % 2 === 0)` returns `true`',
      args: [2, e => e % 2 === 0],
    },
    {
      desc: '`tryNumRange(5, e => e < 0)` returns `false`',
      args: [5, e => e < 0],
    },
  ];

  parameters.forEach(({ desc, args }) =>
    console.log(desc, tryNumRange(...args))
  );
};

module.exports = {
  code: tryNumRange,
  test,
};
