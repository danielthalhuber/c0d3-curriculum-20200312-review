/*
  Goal:

  - Write a function called `logOddOnly` that prints out only the characters at odd indices from a string

  Example:

  - `logOddOnly()` logs nothing
  - `logOddOnly("o")` logs nothing
  - `logOddOnly("_o_d_d")` logs o, d, d

  Signature:

  - Parameters:
    - `str`, public, a string containing the characters to log
    - `i`, private, a number corresponding to the current iteration

  Explanation:

  - Starting with `i = 1`
  - Base case: if `!str` or `i > str.length`, return
  - Recursive case:
    - If `i` is odd, log the character at `i - 1` to the console
    - Return a call to `loggOddOnly`, incrementing `i` by 1

  Code:
*/
const loggOddOnly = (str = '', i = 1) => {
  if ((!str, i > str.length + 1)) return;

  if (i % 2 !== 0) console.log(str[i]);
  return loggOddOnly(str, i + 1);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: 'logOddOnly() logs nothing', args: [] },
    { desc: 'logOddOnly("o") logs nothing', args: ['o'] },
    { desc: 'logOddOnly("_o_d_d") logs o, d, d', args: ['_o_d_d'] },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(desc);
    loggOddOnly(...args);
  });
};

module.exports = {
  code: loggOddOnly,
  test,
};
