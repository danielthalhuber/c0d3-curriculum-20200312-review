# Object Filter

## Goal

Add a prototype method to `Object` called `reduce` that takes a reducer function and an initial value, and then calls the reducer for each property in the object, finally returning a single value. The reducer should:

- accept the following parameters for the current property: accumulator, key, value, index, the original object `reduce` was called on
- return a new accumulator value

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};
const result = info.reduce((acc, key, value, i) => {
  return acc + `${key}-${i}-${value},`;
}, '');

// logs ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,
console.log(result);
```

## Signature

- Parameters:

  - `reducer`: function to be called for each string-keyed, enumerable property in the object

    - Signature:

      - Parameters:

        - `ac`: accumulator value (returned by previous reducer call, initially `iv`)
        - `key`: string name of property
        - `value`: value of property
        - `index`: index of the current property
        - `obj`: the original object that `reduce` was called on

      - Returns: boolean

  - `iv`: initial value for the accumulator

- Returns: undetermined

## Explanation

- Add the property `reduce` to `Object.prototype`
- Assign it a regular function expression that accepts the `reducer` and `iv` parameters
- If the `reducer` is not provided, return/stop
- Call `Object.entries` on `this` (the object) and assign the result to `entries`
- If the `iv` parameter was not provided (or `undefined`), shift the first value off of `entries` and assign it to `iv`
- Return the value returned by calling `reduce` on the `entries` array:

  - Reducer that calls the given `reducer` with the key and value from the entry along with an accumulator, index and a reference to the original object
  - Initial value `iv`

## [Code](index.js)

## [Test](index.test.js)
