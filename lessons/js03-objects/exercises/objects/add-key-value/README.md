# Add Key Value

## Goal

Write a function called `addKV` that takes in an object, 2 strings (key and value), and adds a new property to the object with the given key and value.

## Examples

```js
const obj1 = {};

// result:
// obj1 = { key1: 'value1', key2: 'value2', key3: 'value3' }
addKV(obj1, 'key1', 'value1');
addKV(obj1, 'key2', 'value2');
addKV(obj1, 'key3', 'value3');
```

## Signature

- Parameters:

  - `obj`: an object to add a property to
  - `key`: string representing key name pf property to add
  - `value`: value to assign to property

- Returns: `undefined`
- Side-effect: adds properties to the given object

## Explanation

- If `obj` is not an object, return/stop
- Add a property to the given object with the specified key and value

## [Code](index.js)

## [Test](index.test.js)
