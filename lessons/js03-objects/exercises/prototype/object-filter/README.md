# Object Filter

## Goal

Add a prototype method to `Object` called `filter` that returns a new object, retaining only the properties of the original object that pass the given filter test function. The filter test function should accept the following parameters for the current property: key and value, and then return a boolean indicating whether or not the property should be retained.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};
const result = info.filter((key, value) => {
  return key[0] === 'i' || value[0] === 'n';
});

// logs: { ironman: "arrogant", spiderman: "naive" }
console.log(result);
```

## Signature

- Parameters:

  - `filterTest`: function to be called for each string-keyed, enumerable property in the object

    - Signature:

      - Parameters:

        - `key`: string name of property
        - `value`: value of property

      - Returns: boolean

- Returns: `undefined`

## Explanation

- Add the property `filter` to `Object.prototype`
- Assign it a regular function expression that accepts the `filterTest` parameter
- Call `Object.entries` on `this` (the object)
- Return the value returned by calling `reduce` on the resulting array with:

  - Reducer that adds the current property to the accumulator if `filterTest` returns true for the `key` and `value` of the current element
  - Initial value `{}`

## [Code](index.js)

## [Test](index.test.js)
