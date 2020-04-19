# Key of Longest String

## Goal

Write a function called `keyOfLongestString` that takes an object and returns the key with the longest string value.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

// result will be "ironman"
// since "arrogant" is longer than "naive" and "strong"
const result = keyOfLongestString(info);

const info2 = {
  a: 'xxxxxx',
  bc: 'xx',
  abc: 'xxx',
};

// result2 will be "a"
// since "xxxxxx" is longer than "xx" and "xxx"
const result2 = keyOfLongestString(info2);
```

## Signature

- Parameters:

  - `obj`: object with values to be evaluated

- Returns: string or undefined

## Explanation

- Call `Object.entries` on `obj`
- Call `reduce` on the result with:

  - A callback that assigns the current value to the accumulator if the second element in the curren value is a string that is longer than the second element in the accumulator.
  - An initial value of `[, '']`

- Return the first element of the result.

## [Code](index.js)

## [Test](index.test.js)
