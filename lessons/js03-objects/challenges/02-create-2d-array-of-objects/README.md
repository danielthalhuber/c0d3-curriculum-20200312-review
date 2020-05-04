# Create 2D Array of Objects

## Goal

Create a function named `solution` that, given two integers, returns a new array of of arrays with object elements.

- The first integer represents the number of nested arrays (rows).
- The second integer represents the amount of objects within each nested array (columns).
- Each object should have numeric `x` and `y` properties indicating the zero-based index of the row (array) and column (object).

## Examples

```js
/*
  will return the following:
    [
      [{x: 0, y:0}, {x:1, y: 0}],
      [{x: 0, y: 1}, {x:1, y: 1}],
      [{x: 0, y: 2}, {x:1, y: 2}],
    ]
*/
solution(3, 2);

/*
  will return the following:
    [
      [{x: 0, y:0}, {x:1, y: 0}],
      [{x: 0, y: 1}, {x:1, y: 1}],
      [{x: 0, y: 2}, {x:1, y: 2}],
      ...
      [{x: 0, y: 98}, {x:1, y: 98}],
    ]
*/
solution(99, 2);
```

## Signature

- Parameters:

  - `num1`: number of arrays (rows)
  - `num2`: number of objects in each array (columns)

- Returns: array of object

## Explanation

- Create a new, empty array `result` of size `num1`
- For each array in `result`:

  - Add `num2` objects with `x` and `y` properties with values:

    - `x`: the index of the object within the array
    - `y`: the index of the array within `result`

- Return `result`

## [Code](index.js)

## [Test](index.test.js)
