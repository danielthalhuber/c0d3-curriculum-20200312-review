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

## Array Functions: Add and Remove

`Array.prototype` methods used to add or remove elements from an array:

- `push(value)`:

  - Appends an element with the given value to the array
  - Returns the new length of the array

- `unshift(value)`:

  - Prepends an element with the given value to the array
  - Returns the new length of the array

- `pop()`:

  - Removes the last element from the array
  - Returns the removed element

- `shift()`:

  - Removes the first element from the array
  - Returns the removed element

- `splice(start[, deleteCount[, item1[, item2[, ...]]]])`

  - Removes and possibly adds elements from an array
  - Parameters:

    - `start` specifies the starting index
    - `deleteCount`

      - if specified indicates the number of elements to remove starting at `start`
      - if specified and count extends beyond existing elements, then elements from `start` to `length - 1` are removed
      - if specified with a number less than 1, no elements will be removed

    - `item1, item2, ...` specifies the items to be inserted into the array starting at index `start`

  - Returns: an array of the removed items (one item -> array of one item, no items -> empty array)

### Examples

- `push`

  ```js
  const apples = ['Fuji', 'Gala'];
  const trees = apples.push('Pink Lady');
  // apples is now ["Fuji", "Gala", "Pink Lady"] because push adds to the array
  // trees is the new length of the array (3)

  const peaches = [4, 8, 12];
  const plums = peaches;
  peaches.push(plums);
  // What is peaches?
  // What is plums?

  // answer
  // peaches is [4, 8, 12, [4, 8, 12, ...]]
  // plums is [4, 8, 12, [4, 8, 12, ...]]

  plums[0] = 47;
  // what is peaches?
  // what is plums?

  // answer
  // peaches [47, 8, 12, [47, 8, 12, ...]]
  // plums [47, 8, 12, [47, 8, 12, ...]]

  peaches[3][1] = 39;
  // what is peaches?
  // what is plums?

  // answer
  // peaches [47, 39, 12, [47, 39, 12, ...]]
  // plums [47, 39, 12, [47, 39, 12, ...]]

  let nectarines = [1, 2, 3];
  nectarines = nectarines.push(6);
  // what is nectarines?

  // answer
  // nectarines is 4
  ```

- `unshift`

  ```js
  const nuts = ['almond', 'pistachio', 'hazelnut'];
  const seeds = nuts;
  nuts.unshift(seeds);
  // What is nuts?

  // answer:
  // nuts is [['almond', 'pistachio', 'hazelnut', ...], 'almond', 'pistachio', 'hazelnut']

  // What is seeds?

  // answer:
  // nuts is [['almond', 'pistachio', 'hazelnut', ...], 'almond', 'pistachio', 'hazelnut']

  let states = ['Pennsylvania', 'New Jersey', 'Georgia'];
  states = states.unshift('Delaware');
  // what is states?

  // answer:
  // states is 4
  ```

- `pop`

  ```js
  const states = ['Delaware', 'Missouri', 'Hawaii'];
  const lastState = states.pop();
  // lastState is "Hawaii" and states is now ["Delaware", "Missouri"]

  const nuts = ['almond', 'pistachio', 'hazelnut'];
  const seeds = nuts;
  const nutella = nuts.pop();
  // What is nutella?
  // What is nuts?
  // What is seeds?

  // answer:
  // nutella is 'hazelnut'
  // nuts is ['almond', 'pistachio']
  // seeds is ['almond', 'pistachio']
  ```

- `shift`

  ```js
  const states = ['Delaware', 'Missouri', 'Hawaii'];
  const firstState = states.shift();
  // firstState is "Delaware" and states is now ["Missouri", "Hawaii"]

  const nuts = ['almond', 'pistachio', 'hazelnut'];
  const seeds = nuts;
  const drupe = nuts.shift();
  // What is nuts?
  // What is seeds?
  // What is drupe?

  // answer:
  // nuts is ['pistachio', 'hazelnut']
  // seeds is ['pistachio', 'hazelnut']
  // drupe is 'almond'
  ```

- `splice`

  ```js
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.splice(2, 1, 'Lemon', 'Kiwi');
  // First, 1 element is removed starting at index 2, so fruits becomes
  //    ["Banana", "Orange", "Mango"]
  // Next, the rest of the parameters are added in at index 2
  // Result: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]

  const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits2.splice(2, 2); // what is fruits2?

  // answer
  // fruits2 is ['Banana', 'Orange']

  fruits2.splice(0, 1, 'Apple', 'Mango', 'Pear'); // what is fruits2?

  // answer
  // fruits2 is ['Apple', 'Mango', 'Pear', 'Orange']
  ```

### Exercises

See [README for add and remove function exercises](exercises/add-and-remove/README.md)

## Array Functions: Helpers

### Map

Example

```js
const melon = (delta, wax) => {
  return delta + wax + 1;
};

// what is peppers?
const peppers = [5, 6, 6].map(melon).map(mellon);

// answer:
// after the first pass with map, peppers is [6, 8, 9]
// after the second pass with map, peppers is [7, 10, 12]
```

#### Exercises

See [README for map exercises](exercises/map/README.md)

- Reminder: the spread operator is a convenient way to clone an array

### forEach

Comparison of `Array.prototype.forEach` and `Array.prototype.map`:

- Same parameters
- Different:

  - Return values:

    - `forEach` returns `undefined`
    - `map` returns an array

  - Purpose/intent:

    - `forEach` - call a function once for each element:

      - Call the given function for each element in the array

    - `map` - create a copy where each element is transformed by a function:

      - Call the given function for each element in the array
      - **Add the return values from each function call to a new array**
      - **Return the new array**

#### Exercise

```js
const arr = [];

const solution = (data) => {
  arr.push(data);
};

// at this point, what is arr?

// answer: arr is []

const arr2 = [1, 2, 3];
arr2.forEach(() => {
  arr.push(arr2);
});

// answer:
// at this point arr is [arr2, arr2, arr2], or:
// [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

arr2[2] = 'three';
// at this point what is arr?

// answer:
// at this point arr is [arr2, arr2, arr2], or:
// [[1, 2, 'three'], [1, 2, 'three'], [1, 2, 'three']]
```

### Filter & Find

#### Filter

`Array.prototype.find` returns a new array whose elements are subset of the elements in a given array. Inclusion in this subset is determined by a function. The function is called on each element, and if the function returns a truthy value, the element is included. If no elements in the given array meet the criteria specified by the function, an empty array is returned.

```js
const arr = [1, 2, 4];
const isEven = (n) => n % 2 === 0;

// returns [2, 4]
arr.filter(isEven);

const isNegative = (n) => n < 0;

// returns []
arr.filter(isNegative);
```

#### Find

`Array.prototype.find` returns the first element in the given array meeting a condition specified by a function. The function returns `true` when an element meets the conditions, and `false` otherwise. If no elements in the array meet the conditions, `undefined` is returned.

```js
const arr = [1, 2, 4];
const isEven = (n) => n % 2 === 0;

// returns 2
arr.find(isEven);

const isNegative = (n) => n < 0;

// returns undefined
arr.find(isNegative);
```

#### Exercises

See the [Filter & Find Exercise README](exercises/filter-and-find/README.md)
