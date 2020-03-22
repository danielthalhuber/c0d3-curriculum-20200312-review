/*
  Goal:

  - Write a function called `logFirstX` that logs a given number of characters from the beginning of a string

  Examples:

  - `logFirstX()` logs nothing
  - `logFirstX('abcdefghij')` logs nothing
  - `logFirstX('abcdefghij', -1)` logs nothing
  - `logFirstX('abcdefghij', 0)` logs nothing
  - `logFirstX('abcdefghij', 1)` logs a
  - `logFirstX('abcdefghij', 5)` logs a, b, c, d, e
  - `logFirstX('abcdefghij', 10)` logs a, b, c, d, e, f, g, h, i, j
  - `logFirstX('abcdefghij', 11)` logs a, b, c, d, e, f, g, h, i, j

  Signature:

  - Parameters:
    - `str`, public, string from which characters will be logged
    - `count`, public, number of characters to be logged
    - `i`, private, number corresponding to current iteration
  - Returns: `undefined`
  - Side effect: logs to console

  Explanation:

  - Starting with `i = 0`
  - Base case: if `!str` or `i > str.length` or `i > count`, then return
  - Recursive case:
    - Log `str[i - 1]` to the console
    - Return `logFirstX`, incrementing `i` by 1

  Code:
 */
const logFirstX = (str, count = 0, i = 1) => {
  if (!str || i > str.length || i > count) return;

  console.log(str[i - 1]);
  logFirstX(str, count, i + 1);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: `logFirstX() logs nothing`, args: [] },
    { desc: `logFirstX('abcdefghij') logs nothing`, args: ['abcdefghij'] },
    {
      desc: `logFirstX('abcdefghij', -1) logs nothing`,
      args: ['abcdefghij', -1],
    },
    {
      desc: `logFirstX('abcdefghij', 0) logs nothing`,
      args: ['abcdefghij', 0],
    },
    { desc: `logFirstX('abcdefghij', 1) logs a`, args: ['abcdefghij', 1] },
    {
      desc: `logFirstX('abcdefghij', 5) logs a, b, c, d, e`,
      args: ['abcdefghij', 5],
    },
    {
      desc: `logFirstX('abcdefghij', 10) logs a, b, c, d, e, f, g, h, i, j`,
      args: ['abcdefghij', 10],
    },
    {
      desc: `logFirstX('abcdefghij', 11) logs a, b, c, d, e, f, g, h, i, j`,
      args: ['abcdefghij', 11],
    },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(desc);
    logFirstX(...args);
  });
};

module.exports = {
  code: logFirstX,
  test,
};
