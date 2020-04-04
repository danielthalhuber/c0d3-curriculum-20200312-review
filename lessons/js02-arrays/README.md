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
   const solution = arr => () => arr;
   ```
