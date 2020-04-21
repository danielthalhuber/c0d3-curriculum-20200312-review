# Array Remove Dupes

## Goal

Add a prototype method to `Array` called `removeDupes` that returns a new array with the elements of the original, removing all duplicate elements.

## Examples

```js
// returns [9]
[9, 8, 7, 8, 7, 7, 7].removeDupes();

// returns ['bob', 'obo']
['bob', 'bobo', 'obo', 'bobo'].removeDupes();
```

## Signature

- Parameters: none
- Returns: array

## Explanation

- If the array has length 0, return an empty array
- Otherwise, create a new `Set` from the original array elements
- Spread the values of the set into a new array
- Return the new array

## [Code](index.js)

## [Test](index.test.js)
