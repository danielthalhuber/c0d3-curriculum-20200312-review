/*
  Goal:

  - Write a function called `logNonMatching` that logs every character in a string, except for one specified character

  Examples:

  - `logNonMatching()` logs nothing (returns `undefined`)
  - `logNonMatching('this')` logs the characters t, h, i, s
  - `logNonMatching('this', 't')` logs the characters h, i, s

  Signature:

  - Parameters:
   - `str`, public, string containing the characters to log
   - `char`, public, string character that should not be logged
   - `i`, private, number corresponding to current iteration
  - Returns: `undefined`
  - Side effects: logs to the console

  Explanation:

  - Starting with `i = 1`
  - Base case: if `i > str.length` or `!str` then return
  - Recursive case:
    - if `str[i - 1] !== char[0]` or `!char`, log `str[i - 1]` to the console
    - return `logNonMatching`, incrementing `i` by 1

  Code:
*/
const logNonMatching = (str, char, i = 1) => {
  if (!str || i > str.length) return;

  if (!char || char[0] !== str[i - 1]) console.log(str[i - 1]);
  return logNonMatching(str, char, i + 1);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: '`logNonMatching()` logs nothing (returns `undefined`)', args: [] },
    {
      desc: "`logNonMatching('this')` logs the characters t, h, i, s",
      args: ['this'],
    },
    {
      desc: "`logNonMatching('this', 't')` logs the characters h, i, s",
      args: ['this', 't'],
    },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(desc);
    logNonMatching(...args);
  });
};

module.exports = {
  code: logNonMatching,
  test,
};
