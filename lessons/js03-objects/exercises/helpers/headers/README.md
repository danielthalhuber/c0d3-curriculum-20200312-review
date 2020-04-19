# Headers

## Goal

Write a function called `headers` that takes an object with string values and returns a string containing `div` elements for each property. In each `div`, the key should be wrapped in an `h1` and the value should be wrapped in an `h2`.

## Examples

```js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

// info will become '<div><h1>ironman</h1><h2>arrogant</h2></div><div><h1>spiderman</h1><h2>arrogant</h2></div><div><h1>hulk</h1><h2>strong</h2></div>'
const result = headers(info);
```

## Signature

- Parameters:

  - `obj`: object with properties to be evaluated

- Returns: string

## Explanation

- Use `Object.entries` to get an array of the object's keys and values
- Return the result of calling `reduce` on the entries array with:

  - A reducer that appends the HTML if the value is a string
  - Initial value of ''

## [Code](index.js)

## [Test](index.test.js)
