# Duplicate Numbers

## Goal

Create a function named `solution` that, given an array of numbers, returns an array of the duplicates in the given array.

## Examples

```js
// returns [1, 2]
solution([1, 2, 2, 3, 1]);

// returns [1, 3]
solution([1, 1, 1, 1, 2, 3, 3]);
```

## Signature

- Parameters:

  - `arr`: array of numbers

- Returns: array of numbers

## Explanation

- Create an empty object `freqs`
- Iterate over the numbers in `arr`:

  - Increment the count of the current number in `freqs`

- Create an array named `duplicates`
- Iterate over the properties in `freqs`:

  - If the value is higher than 1, add the key (as a number) to `duplicates`

- Return `duplicates`

## [Code](index.js)

## [Test](index.test.js)
