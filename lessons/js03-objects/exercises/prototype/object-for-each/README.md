# Object For Each

## Goal

Add a prototype method to `Object` called `forEach` that calls a given callback function once for each property in the object. The a callback function should accept the following parameters for the current property: key, value, index.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

/*
 prints the following:

 ironman arrogant 0
 spiderman naive 1
 hulk strong 2

 */
info.forEach((key, value, i) => {
  console.log(key, value, i);
});
```

## Signature

- Parameters:

  - `callback`: function to be called for each string-keyed, enumerable property in the object

    - Signature:

      - Parameters:

        - `key`: string name of property
        - `value`: value of property
        - `index`: number indicating position or index of the property in the object

      - Returns: unspecified

- Returns: `undefined`

## Explanation

- Add the property `forEach` to `Object.prototype`
- Assign it a regular function expression that accepts the callback parameter
- Call `Object.entries` on `this` (the object)
- Call `forEach` on the resulting array, and call the given callback function with the `key`, `value` and `index` of each element

## [Code](index.js)

## [Test](index.test.js)
