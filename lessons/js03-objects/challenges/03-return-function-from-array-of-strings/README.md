# Return Function from Array of Strings

## Goal

Create a function named `solution` that, given an array of strings, returns a function. When the function is called with an object argument, it should return a new object that includes properties from the argument which exist in the array of strings given to `solution`.

## Examples

```js
const r1 = solution(['apollo', 'bella', 'cinderella']);
// will console.log this object: {"apollo": 45}
console.log(r1({ apple: 25, apollo: 45, cindy: 84 }));

const r2 = solution(['apollo', 'bella', 'cinderella']);
// will console.log this object: {"apollo": 0}
console.log(r2({ apple: 0, apollo: false, toString: 84 }));

const r2 = solution(['apollo', 'bella', 'cinderella']);
// will console.log this object: {}
console.log(resp({ donkey: 25, monkey: 45, kong: 84 }));
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
