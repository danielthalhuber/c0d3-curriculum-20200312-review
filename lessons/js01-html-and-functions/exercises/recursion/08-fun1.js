/*
  Goal: Write a function named `fun1` that calls a given function a given number of times

  Examples:

  - `fun1()` should return undefined
  - `fun1(1)` should return undefined
  - `fun1(1, () => console.log('yo, mtv raps'))` should log 'yo, mtv raps' once
  - `fun1(10, () => console.log('yo, mtv raps'))` should log 'yo, mtv raps' 10 times

  Signature:

  - Parameters:
    - `n`, public, a number indicating the number of times to call the function
    - `f`, public, the function to call
    - `i`, private, a number indicating the current iteration
  - Returns: `undefined`
  - Side effects: dictated by the supplied function

  Explanation:

  - Starting with `i = 1`
  - Base case: if `i > n`, return
  - Recursive case: call `f` and then return `fun1`, incrementing `i` by 1

  Code:
*/
const fun1 = (n = 0, f = () => undefined, i = 1) => {
  if (i > n) return;
  f();
  return fun1(n, f, i + 1);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: '`fun1()` should return undefined', args: [] },
    { desc: '`fun1(1)` should return undefined', args: [1] },
    {
      desc: `\`fun1(1, () => console.log('yo, mtv raps'))\` should log 'yo, mtv raps' once'`,
      args: [1, () => console.log('yo, mtv raps')],
    },
    {
      desc: `\`fun1(10, () => console.log('yo, mtv raps'))\` should log 'yo, mtv raps' 10 times'`,
      args: [10, () => console.log('yo, mtv raps')],
    },
  ];
  parameters.forEach(({ desc, args }) => {
    console.log(`\n${desc}`);
    fun1(...args);
  });
};

module.exports = {
  code: fun1,
  test,
};
