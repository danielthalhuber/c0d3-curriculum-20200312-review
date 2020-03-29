/*
  Goal:

  - Write a function called lastX that returns a chunk of a given size from the end of a string

  Examples:

  - `lastX("camelCase", 4)` returns "Case"
  - `lastX("camelCase", 1)` returns "e"
  - `lastX("camelCase", 9)` returns "camelCase"
  - `lastX("camelCase", 10)` returns "camelCase"
  - `lastX("camelCase")` returns ""
  - `lastX("camelCase", 0)` returns ""
  - `lastX("camelCase", -1)` returns ""
  - `lastX()` returns `undefined`

  Signature:

  - Parameters:
    - `str`, public, the string from which a substring will be returned
    - `count`, public, the number of characters to include in the substring
    - `i`, private, the number corresponding to the current iteration
    - `result`, private, the substring to return

  Explanation:

  - Starting with `i = 1` and `result = ''`
  - Base case: if `!str` or `i > str.length` or `i > count`, then return `result`
  - Recursive case: return `lastX`, increment `i` by 1 and prepend `str[str.length - i]` to `result`

  Code:
*/
const lastX = (str, count, i = 1, result = '') => {
  if (!str || i > str.length || i > count) return result;

  return lastX(str, count, i + 1, str[str.length - i] + result);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: 'lastX("camelCase", 4) returns "Case"', args: ['camelCase', 4] },
    { desc: 'lastX("camelCase", 1) returns "e"', args: ['camelCase', 1] },
    {
      desc: 'lastX("camelCase", 9) returns "camelCase"',
      args: ['camelCase', 9],
    },
    {
      desc: 'lastX("camelCase", 10) returns "camelCase"',
      args: ['camelCase', 10],
    },
    { desc: 'lastX("camelCase") returns ""', args: ['camelCase'] },
    {
      desc: 'lastX("camelCase", 0) returns ""',
      args: ['camelCase', 0],
    },
    {
      desc: 'lastX("camelCase", -1) returns ""',
      args: ['camelCase', -1],
    },
    { desc: 'lastX() returns ""', args: [] },
  ];

  parameters.forEach(({ desc, args }) => console.log(desc, lastX(...args)));
};

module.exports = {
  code: lastX,
  test,
};
