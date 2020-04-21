# Array Set Max Size

## Goal

Add a prototype method to `Array` called `setMaxSize` that gives an array a maximum length beyond which elements cannot be pushed.

## Examples

```js
const a = ['Edna', 'Optimus', 'Minion'];
a.setMaxSize(4);

// returns 4
// a will be ["Edna", "Optimus", "Minion", "Groot"]
a.push('Groot');

// returns 4, array stays the same
a.push('hello');
```

## Signature

- Parameters: `size`: number indicating maximum length of array
- Returns: undefined

## Explanation

- If the value of `size` is `undefined`, return/stop
- If the array does not already have a `maxSize` property, add and assign it the value `size`
- If the array does not already have its own `push` method:

  - Add an `_push` method to the array and assign it the value of `Array.prototype.push`
  - Add a `push` method to the array as follows:

    - Signature:

      - Parameters: `value`: value to be appended to the array
      - Returns: array length

    - Explanation:
      - If the array's length is less than `maxSize`, call `this._push(value)`
      - Return the array's length

- If the array does not already have its own `unshift` method:

  - Add an `_unshift` method to the array and assign it the value of `Array.prototype.unshift`
  - Add a `unshift` method to the array as follows:

    - Signature:

      - Parameters: `value`: value to be appended to the array
      - Returns: array length

    - Explanation:
      - If the array's length is less than `maxSize`, call `this._unshift(value)`
      - Return the array's length

## [Code](index.js)

## [Test](index.test.js)
