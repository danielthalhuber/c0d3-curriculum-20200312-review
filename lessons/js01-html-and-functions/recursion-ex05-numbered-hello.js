/*
  Goal:

  - Write a function called `numberedHello` that takes a number parameter and returns a string that repeats `'hello'` as many times as the given number

  Examples:

  - Call `numberedHello()` and observe that the empty string is returned
  - Call `numberedHello(-1)` and observe that the empty string is returned
  - Call `numberedHello(0)` and observe that the empty string is returned
  - Call `numberedHello(1)` and observe that the following is returned: hello
  - Call `numberedHello(5)` and observe that the following is returned: hellohellohellohellohello

  Signature:

  - Parameters:
    - `number`, a public number (defaults to 0), used to indicate the number of repetitions/iterations
    - `count`, a private number, initialized to 1, used to track the current iteration
    - `result`, a private string, initalized to
  - Return: a string

  Explanation:

  - Starting with the given `number`, a `count` of 1 and `result` of `''`
  - Base case: if `count > number`, return `result`
  - Recursive case:
    - Append 'hello' to `result`
    - Call `numberedHello`, incrementing `count` by 1

  Code:
*/
const numberedHello = (number = 0, count = 1, result = '') => {
  if (count > number) return result;

  return numberedHello(number, count + 1, result + 'hello');
};

/*
  Test
*/
const test = () => {
  const parameters = [
    {
      desc:
        'Call `numberedHello()` and observe that the empty string is returned',
      args: [],
    },
    {
      desc:
        'Call `numberedHello(-1)` and observe that the empty string is returned',
      args: [-1],
    },
    {
      desc:
        'Call `numberedHello(0)` and observe that the empty string is returned',
      args: [0],
    },
    {
      desc:
        'Call `numberedHello(1)` and observe that the following is returned: hello',
      args: [1],
    },
    {
      desc:
        'Call `numberedHello(5)` and observe that the following is returned: hellohellohellohellohello',
      args: [5],
    },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(`\n${desc}`);
    console.log('return value:', numberedHello(...args));
  });
};

module.exports = {
  code: numberedHello,
  test,
};
