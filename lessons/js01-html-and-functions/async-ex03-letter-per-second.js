/*
  Goal:

  - Write a function named `letterPerSecond` that takes in a string, and calls `console.log` for every letter in the string, 1 second after each call (aka 1 letter per second)

  Examples:

  - `letterPerSecond()` logs nothing to the console
  - `letterPerSecond("a") logs "a" to the console after one second
  - `letterPerSecond("abc") logs "a", then "b", and then "c" after 1, 2, and 3 seconds respectively

  Signature:

  - Parameters:
    - `str`, public, the string containing the characters to be logged to the console
    - `i`, private, number corresponding to the index of the character to be logged
  - Returns: `undefined`
  - Side effect: logs to the console

  Explanation:

  - Starting with `i = 0`
  - Base: if `i >= str.length` then return/exit
  - Recursive:
  - Return a call to `setTimeout` with the following arguments:
    - A function that:
      - Logs the current character of `str` to the console
      - Calls `letterPerSecond`, incrementing `i` by 1
    - 1000 (number representing milliseconds)

  Code:
*/
const letterPerSecond = (str = '', i = 0) => {
  if (i >= str.length) return;

  setTimeout(() => {
    console.log(str[i]);
    letterPerSecond(str, i + 1);
  }, 1000);
};

/*
  Test:
*/
const test = () => {
  console.log(
    'letterPerSecond("abc") logs "a", then "b", and then "c" after 1, 2, and 3 seconds respectively'
  );
  letterPerSecond('abc');
};

module.exports = {
  code: letterPerSecond,
  test,
};
