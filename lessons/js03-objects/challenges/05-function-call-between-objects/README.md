# Function Call Between Objects

## Goal

Create a function named `solution` that, given two objects, returns a new object with the keys of the first object, with values given by the passing the value from the first object to the function in the second object with the same key. If a matching key does not exist in the seconde object, assign the value given by the first object.

## Examples

```js
/*
  returns: {
    "name": "drakekendrick",
    "age": "33",
    "power": "motivatingfinessing",
    "color": "platinum"
  }
*/
solution(
  {
    name: 'drake',
    age: '33',
    power: 'finessing',
    color: 'platinum',
  },
  {
    name: (e) => {
      return e + 'kendrick';
    },
    power: (e) => {
      return 'motivating' + e;
    },
  }
);
```

## Signature

- Parameters:

  - `obj1`: object mapping strings to values
  - `obj2`: object mapping strings to functions

- Returns: object

## Explanation

- Create an empty object `result`
- For each `key` in `obj`, assign the following value to `result[key]`:

  - if the same key exists in `obj2`: `obj2[key](obj1[key])`
  - Otherwise: `obj[key]`

- Return `result`

## [Code](index.js)

## [Test](index.test.js)
