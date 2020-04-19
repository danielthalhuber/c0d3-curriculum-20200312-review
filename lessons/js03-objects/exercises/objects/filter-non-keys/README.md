# Filter Non Keys

## Goal

Write a function called `filterNonKeys` that filters an array to only include strings that are also keys in a given object.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};
const avengers = ['ironman', 'strange', 'thor', 'spiderman', 'hulk'];

// result is ["ironman", "spiderman", "hulk"]
const result = filterNonKeys(avengers, info);
```

## Signature

- Parameters:

  - `arr`: array of values to be filtered
  - `obj`: object containing keys that will be used to filter `arr`

- Returns: array

## Explanation

- Return the result of calling `filter` on `arr` with a test function that returns true if a given value is also a key of `obj`

## [Code](index.js)

## [Test](index.test.js)
