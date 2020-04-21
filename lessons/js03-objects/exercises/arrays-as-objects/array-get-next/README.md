# Array Get Next

## Goal

Add a prototype method to `Array` called `getNext` that returns the next element in the array.

## Examples

```js
const a = ['Edna', 'Optimus', 'Minion'];
a.getNext(); // returns "Edna"
a.getNext(); // returns "Optimus"
a.getNext(); // returns "Minion"

a.getNext(); // returns "Edna"
a.getNext(); // returns "Optimus"
a.getNext(); // returns "Minion"

a.getNext(); // returns "Edna"
// ...
```

## Signature

- Parameters: none
- Returns: unspecified

## Explanation

- If the array does not already have a `nextIndex` property, add and assign it the value 0
- Store the next value (value at index `nextIndex`)
- Increment the value of `nextIndex` by 1, modulo the length of the array
- Return the stored next value

## [Code](index.js)

## [Test](index.test.js)
