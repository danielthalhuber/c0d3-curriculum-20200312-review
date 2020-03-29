/*
  Goal:

  - Write a function called `countToMe` that `console.log`s every number from 8 to the input number

  Examples:

  - Call `countToMe()` and observe no logging (returns `undefined`)
  - Call `countToMe(7)` and observe no logging
  - Call `countToMe(8)` and observe that 8 is logged
  - Call `countToMe(12)` and observe that the numbers 8 through 12 are logged

  Signature:

  - Parameters:
    - `limit`, a number initialized to 0, which indicates how far to count
    - `count`, a private variable initialized to 0, used to track iterations

  Explanation:

  - Start with parameters `limit` and `count` initialized to 0 and 8 respectively
  - Base case: if `count` > `limit`, return/stop
  - Recursive case:
     - Log `count`
     - Return a call to `countToMe` incrementing count by 1

  Code:
*/
const countToMe = (limit = 0, count = 8) => {
  if (count > limit) return;
  console.log(count);
  return countToMe(limit, count + 1);
};

/*
  Test:
*/
const test = () => {
  console.log('\nshould log nothing');
  countToMe();

  console.log('\nshould log nothing');
  countToMe(7);

  console.log('\nshould log 8');
  countToMe(8);

  console.log('\nshould log the numbers 8 through 12');
  countToMe(12);
};

module.exports = {
  code: countToMe,
  test,
};
