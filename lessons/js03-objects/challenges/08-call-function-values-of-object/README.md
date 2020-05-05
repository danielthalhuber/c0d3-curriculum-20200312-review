# Call Function Values of Object

## Goal

Create a function named `solution` that, given an object and a number:

- Calls each function value in the object, passing its key as an argument
- After each function call, there should be a delay of the given number of milliseconds before the next function value is called

## Examples

```js
const a = {
  name1: (key) => console.log(key),
  name2: (key) => console.log(key + 2),
  name3: (key) => console.log(key === 'name3'),
  level: (key) => console.log(key + key + key),
};
/*
  logs: name1
  then waits 998 milliseconds
  then logs: name22
  then waits 998 milliseconds
  then logs: true
  then waits 998 milliseconds
  and then finally logs: levellevellevel
*/
solution(a, 998);
```

## Signature

- Parameters:

  - `obj`: object containing function values to call
  - `num`: number representing delay in milliseconds before calling next function

- Returns: `undefined`
- Side-effects: calls function values of given object

## Explanation

- Define function `callAtInterval` that:

  - Takes parameters:

    - `calls`: array of arrays containing argument and function pairs
    - `delay`: number representing delay before next function call

  - Returns when the array is empty
  - Otherwise:

    - Remove the first array from `calls` and call the function with the given argument
    - Calls `setTimeout` to execute `callAtInterval` after the given `delay`

- Create an array `calls` of key-value property arrays containing only properties that have function values
- Call `callAtInterval` with `calls` and `delay`

## [Code](index.js)

## [Test](index.test.js)
