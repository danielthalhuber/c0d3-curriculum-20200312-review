# Map Objects

## Goal

Create a function named `solution` that, adds a method named `map` to `Object.prototype` that duplicates the behavior of `Array.prototype.map`, replacing the current-value argument of the callback function with the object's current key and value.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

const result = info.map((key, value, i) => {
  return key + i + value;
});

// logs ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']
console.log(result);
```

## Signature

- Parameters:

  - `callback`: function with the following signature:

    - Parameters:

      - `currKey`: key of the object's current property
      - `currValue`: key of the object's current property
      - `index`: the index of the object's current property
      - `object`: a reference to the object that `map` was called on

  - `thisArg`: value to use as `this` when calling `callback`

- Returns: array values determined by the return values of `callback` for each property

## Explanation

- Add a method to `Object.prototype` called `map` with parameters `callback` and `thisArg` as described above
- In the body of the method:

  - Create an empty array `result`
  - For each property in `this`:

    - Append to `result`: the value returned by calling `callback` with the current property arguments (as described above)

  - Return `result`

## [Code](index.js)

## [Test](index.test.js)
