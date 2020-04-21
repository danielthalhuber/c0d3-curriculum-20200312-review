# Array Get Char Count

## Goal

Add a prototype method to `Array` called `getCharCount` that operates on arrays of strings and returns an object with counts of each character found in the string elements.

## Examples

```js
/*
  Returns
  {
    C: 3,
    a: 5,
    d: 2,
    e: 3,
    h: 3,
    i: 1,
    l: 1,
    m: 2,
    n: 2,
    o: 1,
    r: 5,
    z: 1,
  }
*/
['Charmander', 'Charmeleon', 'Charizard'].getCharCount();
```

## Signature

- Parameters: none
- Returns: object

## Explanation

- If all of the elements of the array are not strings, return an empty object.
- Otherwise return the result of calling `reduce` on the given array with:

  - A reducer that:

    - Loops over each character in the string value, incrementing the character's count in the accumulator each time
    - Returns the accumulator

  - Initial value `{}`

## [Code](index.js)

## [Test](index.test.js)
