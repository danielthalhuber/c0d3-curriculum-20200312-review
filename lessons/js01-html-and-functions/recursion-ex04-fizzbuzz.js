/*
  Goal:

  - Write a function called `fizzbuzz` that calls `console.log` for every number from 1 to the input number
    - The value logged to the console should be:
      - If the number is divisible by 3, log the value `'fizz'`
      - If the number is divisible by 5, log the value `'buzz'`
      - If the number is divisible by 3 and 5, log the value `'fizzbuzz'`

  Examples:

  - Call `fizzbuzz()` and observe no logging (returns `undefined`)
  - Call `fizzbuzz(-1)` and observe no logging (returns `undefined`)
  - Call `fizzbuzz(0)` and observe no logging (returns `undefined`)
  - Call `fizzbuzz(3) and observe that the following values are logged: 1, 2, fizz
  - Call `fizzbuzz(5)` and observe that the following values are logged: 1, 2, fizz, 4, buzz
  - Call `fizzbuzz(15)` and observe that the following values are logged: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

  Signature:

  - Parameters:
    - `limit`, public number, defaults to 0
    - `count`, private number, initialized to 1
  - Returns: `undefined`
  - Side-effect: logs to the console

  Explanation:

  - Starting with `limit` and `count` (initialized to 1)
  - Base case: if `count > limit`, return `undefined`
  - Recursive case:
    - Create `fizz` and assign the value `'fizz'` if count is a multiple of 3
    - Create `buzz` and assign the value `'buzz'` if count is a multiple of 4
    - Log the value `fizz + buzz` if it is truthy, otherwise `count`
    - Return a call to `fizzbuzz`, incrementing the count by 1

  Code:
*/
const fizzbuzz = (limit = 0, count = 1) => {
  if (count > limit) return;

  const fizz = count % 3 === 0 ? 'fizz' : '';
  const buzz = count % 5 === 0 ? 'buzz' : '';
  console.log(fizz + buzz || count);

  return fizzbuzz(limit, count + 1);
};

/*
  Test
*/
const test = () => {
  const parameters = [
    { desc: 'logs nothing', args: [] },
    { desc: 'logs nothing', args: [-1] },
    { desc: 'logs nothing', args: [0] },
    { desc: 'logs 1, 2, fizz', args: [3] },
    { desc: 'logs 1, 2, fizz, 4, buzz', args: [5] },
    {
      desc:
        'logs 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz',
      args: [15],
    },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(`\n${desc}`);
    fizzbuzz(...args);
  });
};

module.exports = {
  code: fizzbuzz,
  test,
};
