# Longest String

## Goal

Write a function called `longestString` that takes an object and returns the longest string value.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

// result will be "arrogant"
const result = longestString(info);
```

## Signature

- Parameters:

  - `obj`: object with values to be evaluated

- Returns: string

## Explanation

- Return the result of the following

  - Call `Object.values` on `obj`
  - Call `reduce` on the result with a callback that assigns the current value to the accumulator if it is a string that is longer than the accumulator.

## [Code](index.js)

## [Test](index.test.js)
