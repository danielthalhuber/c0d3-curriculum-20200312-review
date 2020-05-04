# Return Array of Values

## Goal

Create a function named `solution` that, given an array of strings (keys) and an object, returns a new array of values using the given array elements as keys to access the given object.

## Examples

```js
// returns ['hi', 'world']
solution(['123', 'abc'], { 123: 'hi', 345: 'world', abc: 'world' });

// returns ['hi']
solution(['123', 'hasOwnObject'], { 123: 'hi', 345: 'world', abc: 'world' });

// returns [false, 'world']
solution(['123', 'abc'], { 123: false, 345: 'world', abc: 'world' });
```

## Signature

- Parameters:

  - `arr`: array of strings
  - `obj`: object

- Returns: array of strings

## Explanation

- Create a new, empty array `result`
- For each string in the `arr`:

  - If `obj` has a property with a key equal to the string, add the value of the property to `result`

- Return `result`

## [Code](index.js)

## [Test](index.test.js)
