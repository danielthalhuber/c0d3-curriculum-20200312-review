/*
  Goal:

  - Write a function called `wait20` that waits 20 seconds and then calls `console.log("one")`

  Example:

  - Calling `wait20()` logs "one" to the console after 20 seconds

  Signature:

  - Parameters: none
  - Returns: `undefined`
  - Side effect: logs to the console

  Explanation:

  - Call `setTimeout` with the following arguments:
    - A function that calls `console.log("one")`
    - 20000

  Code:
*/
const wait20 = () => {
  setTimeout(() => console.log('one'), 20000);
};

/*
  Test:
*/
const test = () => {
  console.log('should log "one" to the console after 20 seconds');
  wait20();
};

module.exports = {
  code: wait20,
  test,
};
