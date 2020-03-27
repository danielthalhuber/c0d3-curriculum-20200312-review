/*
  Goal:

  - Write a function called `oneAndTwo` that waits 20 seconds and then calls `console.log("one")`, then waits another 10 seconds and then calls `console.log("two")`

  Example:

  - Calling `oneAndTwo()` logs "one" after 20 seconds, and then "two" after the next 10 seconds has elapsed

  Signature:

  - Parameters: none
  - Returns: `undefined`
  - Side effect: logs to the console

  Code:
*/
const oneAndTwo = () => {
  setTimeout(() => {
    console.log('one');

    setTimeout(() => console.log('two'), 10000);
  }, 20000);
};

/*
  Test:
*/
const test = () => {
  console.log(
    'should log "one" after 20 seconds, and then "two" after the next 10 seconds has elapsed'
  );
  oneAndTwo();
};

module.exports = {
  code: oneAndTwo,
  test,
};
