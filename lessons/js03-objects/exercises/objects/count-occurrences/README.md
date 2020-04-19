# Count Occurrences

## Goal

Write a function called `countOccurrences` that takes an array of strings or numbers, and returns an object that counts the number of times each element occurs in the array.

## Examples

```js
// assigns the following to result: {abc: 4, a: 2, b: 2, c: 1}
const abc = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc'];
const result = countOccurrences(abc);

// assigns the following to result2: {1: 1, 2: 1, 3: 1, 4: 2, 7: 3}
const nums = [1, 2, 3, 4, 4, 7, 7, 7];
const result2 = countOccurrences(nums);
```

## Signature

- Parameters:

  - `arr`: array of strings or numbers to count

- Returns: object

## Explanation

- Return the result of calling `reduce` on `arr` with:

  - Callback that increments the count of the current value in the accumulator object
  - Initial value of an empty object

## [Code](index.js)

## [Test](index.test.js)
