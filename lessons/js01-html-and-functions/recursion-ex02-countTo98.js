/*
  Goal:

  - Write a function called `countTo98` that calls `console.log` once for every number from 0 to 98

  Examples:

  - Call `countTo98()` and observe the numbers 0 to 98 logged
  - Call `countTo98(98)` and observe the number 98 logged
  - Call `countTo98(99)` and observe that nothing is logged

  Signature:

  - Parameters: only an internal/private `counter` initialized to 0
  - Return: `undefined`
  - Side effect: logs to the console

  Code:
*/
const countTo98 = (count = 0) => {
  if (count > 98) return;

  console.log(count);
  return countTo98(count + 1);
};

/*
  Test:
*/
const test = () => {
  console.log('\nshould log the numbers 0 to 98');
  countTo98();

  console.log('\nshould log the number 98');
  countTo98(98);

  console.log('\nshould log nothing');
  countTo98(99);
};

module.exports = {
  code: countTo98,
  test,
};
