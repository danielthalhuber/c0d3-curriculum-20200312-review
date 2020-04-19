# Remove Longest String

## Goal

Write a function called `removeLongestString` that takes an object and removes the property with the longest string value.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

// info will be changed to:
// { spiderman: "naive", hulk: "strong" }
removeLongestString(info);
```

## Signature

- Parameters:

  - `obj`: object with values to be evaluated

- Returns: undefined
- Dependencies: `keyOfLongestString`

## Explanation

- Identify the key with the longest string value using `keyOfLongestString`
- Remove the key with the longest string value with the `delete` operator

## [Code](index.js)

## [Test](index.test.js)
