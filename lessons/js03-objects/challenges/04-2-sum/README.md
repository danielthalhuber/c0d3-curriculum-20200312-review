# 2 Sum

## Goal

Create a function named `solution` that, given an array of unique numbers and a number, returns `true` if any pairs add up to the number and `false` otherwise.

## Examples

```js
// returns true
solution([1, 2, 3, 4, 5], 9);

// returns false
solution([1, 2, 3, 4, 5], 10);

// returns true
solution([1, 2, 3, 4, 5], 6);
```

## Signature

- Parameters:

  - `arr`: array of unique numbers
  - `num`: number representing sum of two numbers in `arr`

- Returns: boolean

## Explanation

- Create an empty object `comps`
- Iterate over the elements of `arr`

  - Compute the compliment of the current number with respect to the sum `num`
  - If the compliment exists in `comps`, return `true`
  - Otherwise add the current number to `comps` as a key with a value of its index in `arr`

- Return `false`

## [Code](index.js)

## [Test](index.test.js)
