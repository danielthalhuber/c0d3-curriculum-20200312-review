/*
  Goal:

  - Write a function called `removeLetter` that returns a string without any instances of a given letter

  Examples:

  - `removeLetter('abcabcabc', 'a')` returns 'bcbcbc'
  - `removeLetter('abcabcabc', 'az')` returns 'bcbcbc'
  - `removeLetter('abcabcabc', 'z')` returns 'abcabcabc'
  - `removeLetter('abcabcabc')` returns 'abcabcabc'
  - `removeLetter()` returns ''

  Signature:

  - Parameters:
    - `str`, public, string containing the characters to filter
    - `letter`, public, string containing the letter to to remove
    - `i`, private, number corresponding to the current iteration
    - `result`, private, string containing the filtered characters from `str`
  - Returns: string

  Explanation:

  - Starting with `i = 1`
  - Base case: if `i > str.length`, then return `str`
  - Recursive case:
    - Create a variable `filteredChar`, assigning it the value at `str[i - 1]` if that value is not equal to the first character of `letter`
    - Return a call to `removeLetter` where:
      - `i` is incremented by one
      - Pass the value `result + filteredChar` as the `result` argument

  Code:
*/
const removeLetter = (str = '', letter = '', i = 1, result = '') => {
  if (i > str.length) return result;

  const filteredChar = str[i - 1] !== letter[0] ? str[i - 1] : '';
  return removeLetter(str, letter, i + 1, result + filteredChar);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    {
      desc: "removeLetter('abcabcabc', 'a') returns 'bcbcbc'",
      args: ['abcabcabc', 'a'],
    },
    {
      desc: "removeLetter('abcabcabc', 'az') returns 'bcbcbc'",
      args: ['abcabcabc', 'az'],
    },
    {
      desc: "removeLetter('abcabcabc', 'z') returns 'abcabcabc'",
      args: ['abcabcabc', 'z'],
    },
    {
      desc: "removeLetter('abcabcabc') returns 'abcabcabc'",
      args: ['abcabcabc'],
    },
    { desc: "removeLetter() returns ''", args: [] },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(desc, removeLetter(...args));
  });
};

module.exports = {
  code: removeLetter,
  test,
};
