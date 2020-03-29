/*
  Goal:

  - Write a function called `love` that calls `console.log('The things I do for love')` 99 times

  Examples:

  - Call `love()` and observe `'The things I do for love'` logged 99 times
  - Call `love(98)` and observe the statement logged only once
  - Call `love(99)` and observe no logging (returns `undefined`)

  Signature:

  - Parameters: there are no expected parameters, although the function has the `count` parameter for privately tracking the number of times the statement has been logged to the console
  - Return: `undefined`
  - Side effect: logs a statement to the console

  Explanation:

  - Start with an internal parameter `counter` initialized to 0
  - Base case: if `counter` is greater than 98, return/stop
  - Recursive case:
    - Log the statement to the console
    - Call `love` with an incremented value for `counter`

  Code:
*/
const love = (count = 0) => {
  if (count > 98) return;
  console.log('The things I do for love');
  return love(count + 1);
};

/*
  Test:
*/
const test = () => {
  console.log('\nshould log 99 times');
  love();

  console.log('\nshould log 1 time');
  love(98);

  console.log('\nshould log 0 times');
  love(99);
};

module.exports = {
  code: love,
  test,
};
