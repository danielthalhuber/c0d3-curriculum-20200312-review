# JS2 - Arrays

## Preflight

This section has the reader create an npm package with the single dependency `jest`. The package contains two files:

- `prefilght.js`: contains solutions to exercises in the Preflight section
- `preflight.test.js`: contains tests for the solutions in `preflight.js`

I will modify this structure slightly so that the package has the following structure:

- `README.md`: provides descriptions and links to code and test files for each solution
- For each solution:
  - `solution-name.js`: file containing solution code for an exercise
  - `solution-name.test.js`: file containing test code for an exercise

[Solutions](preflight/README.md)

## Overview

This lesson has two parts:

- HTML
- Arrays

## HTML/JS

- Refer to the [example file](examples/div-and-inner-props.html)
- Recommended changes:

  - Use `Node.textContent` over `HTMLElement.innerText` for efficiency (see [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent))
  - When referring to methods of `HTMLElement` and `Node`, it might be helpful to mention that these are part of the web/browser API, not JavaScript.

- [Exercises](exercises/html/README.md)

## Arrays

- Store multiple values
- Values referenced by index

### Examples

- Example 1:

  ```js
  const trees = ['pine', 4, 'apple', 6, false, () => {}]; // Example of an array.
  let res = trees[0]; // trees[0] will get the element at index 0, which is "pine"

  trees[4] = trees[0] + trees[2]; // what is trees?
  trees[5] = trees[1] + trees[3]; // what is trees?

  res = trees.length; // res is 5.
  // Like strings, arrays also have a special property called length.
  ```

  - `trees[4] = trees[0] + trees[2]; // what is trees?`

    ```js
    ['pine', 4, 'apple', 6, 'pineapple', () => {}];
    ```

  - `trees[5] = trees[1] + trees[3]; // what is trees?`

    ```js
    ['pine', 4, 'apple', 6, 'pineapple', 10];
    ```

- Example 2:

  ```js
  const barks = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
  ];
  barks[2][1] = 10; // what is barks?
  barks[1][0] = barks[2][1]; // what is barks?

  barks[2] = () => {
    barks[0][1] = barks[0][1] + barks[0][0];
  };
  barks[2](); // what is barks?
  barks[1] = barks[2]();
  // In the end, what is barks?
  ```

  - ```js
    barks[2][1] = 10; // what is barks?`

    // answer
    [
      [1, 2, 3],
      [2, 3, 4],
      [3, 10, 5],
    ];
    ```

  - ```js
    barks[1][0] = barks[2][1]; // what is barks?`

    // answer
    [
      [1, 2, 3],
      [10, 3, 4],
      [3, 10, 5],
    ];
    ```

  - ```js
    barks[2] = () => {
      barks[0][1] = barks[0][1] + barks[0][0];
    };
    barks[2](); // what is barks?

    // answer
    [
      [1, 3, 3],
      [10, 3, 4],
      () => {
        barks[0][1] = barks[0][1] + barks[0][0];
      },
    ];
    ```

  - ```js
    barks[1] = barks[2](); // In the end, what is barks?

    // answer
    [
      [1, 3, 3],
      undefined,
      () => {
        barks[0][1] = barks[0][1] + barks[0][0];
      },
    ];
    ```

### Exercises

1. Create an array with 3 identical strings.

   ```js
   const arr = ['a', 'a', 'a'];
   ```

2. Create an array with 3 functions.

   ```js
   const arr = [() => true, () => false, () => 1];
   ```

3. Create an array with a string, a function, and an array.

   ```js
   const arr = ['s', () => true, [1, 2, 3]];
   ```

4. Write a function called solution that takes in an array and returns a function. When the function is called, the array input is returned.

   ```js
   const solution = (arr) => () => arr;
   ```

## Non-Primitive

In JavaScript, array is a non-primitive data type. This means that an array variable stores an address to the array data in memory, not the actual array data.

Examples:

1. ```js
   const a = [1, 2, 3];
   const b = [1, 2, 3];

   const c = a === b; // what is c?

   // answer
   false;
   ```

2. ```js
   const a = [1, 2, 3] === [1, 2, 3]; // what is a?

   // answer
   false;
   ```

### Variable Declarations

Example:

```js
const musicians = [1, 2, 3, 4]; // Since arrays are non-primitive data,
// musicians is the address to the array data.

musicians[0] = 'Mozart'; // did musicians change?
musicians[1] = 'Beethoven'; // did musicians change?
musicians[2] = 'Liszt'; // did musicians change?
musicians[3] = 'Chopin'; // did musicians change?
```

In all cases above, `musicians` continues to point to a location in memory. So while the values/data stored at that location has changed, the variable `musicians` has not changed.

With that in mind: all variables of non-primitive data types should be declared with `const` because their value does not change. If for some reason you wanted to assign a new address to the variable, it would be appropriate to declare the variable with `let` instead of `const`.

### Variable Assignments

Variables of non-primitive data types may exhibit counterintuitive behavior. A failure to understand or anticipate the behavior of non-primitive data types is the source of many bugs.

Examples:

1. ```js
   const avengers = ['Banner', 'Stark', 'Odinson', 'Rogers'];
   const team = avengers;
   avengers[1] = 'Fury';
   // what is avengers?
   // what is team?

   // answer
   // both avengers and team
   ['Banner', 'Fury', 'Odinson', 'Rogers'];
   ```

2. ```js
   const guardians = ['Rocket', 2, 'Drax'];
   const milano = guardians;
   milano[milano[1]] = 'Quill';
   // What is guardians?
   // What is milano?

   // answer
   // both guardians and milano
   ['Rocket', 2, 'Quill'];
   ```

3. ```js
   const planets = ['Morag', 'Aakon', 'Xandar'];
   let worlds = planets;
   worlds = ['Earth', 'Contraxia', 'Berhart'];
   // what is worlds?
   // what is planets?

   // answer
   // worlds
   ['Earth', 'Contraxia', 'Berhart'];
   // planets
   ['Morag', 'Aakon', 'Xandar'];
   ```

### Functions

Example:

```js
const fruitPrices = [100, 150, 200];
const addTax = (arr, i = 0) => {
  if (i === arr.length) {
    return arr;
  }
  arr[i] = arr[i] * 1.1;
  return addTax(arr, i + 1);
};
const cost = addTax(fruitPrices); // what is cost?
// what is fruitPrices?

const isSame = fruitPrices === cost; // what is isSame?

// answer
// cost and fruitPrices
[110, 165, 220];
// isSame
true;
```

### Exercises

See [README for non-primitive exercises](exercises/non-primitive/README.md)
