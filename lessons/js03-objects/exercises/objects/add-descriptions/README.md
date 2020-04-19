# Add Descriptions

## Goal

Write a function called `addDescriptions` that takes an array of objects with name properties, and an object that maps names to descriptions. The function should add the description from the given object to each object in the array with a matching name.

## Examples

```js
const characters = [
  { name: 'ironman' },
  { name: 'spiderman' },
  { name: 'hulk' },
];
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

/*
  changes characters to:
  [
    {name: "ironman", description: "arrogant"},
    {name: "spiderman", description: "naive"},
    {name:"hulk", description: "strong"}
  ]
 */
addDescriptions(characters, info);
```

## Signature

- Parameters:

  - `arr`: array of objects to be updated
  - `obj`: object containing a map from names to descriptions

- Returns: `undefined`

## Explanation

- Call `forEach` on `arr` with a function that adds a description property to an element-object if its name matches a key in the object of descriptions.

## [Code](index.js)

## [Test](index.test.js)
