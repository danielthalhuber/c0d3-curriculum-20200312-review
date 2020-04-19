# Commas

## Goal

Write a function called `commas` that takes an object of and returns a string containing a comma separated list of the given objects string values.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};
// result will be: 'arrogant, native, strong'
const result = commas(info);
```

## Signature

- Parameters:

  - `obj`: object with values to be evaluated

- Returns: string

## Explanation

- Use `Object.values` to get an array of the objects values
- Return the result of calling `reduce` on the values array to produce a string of the object's string values separated by commas

## [Code](index.js)

## [Test](index.test.js)
