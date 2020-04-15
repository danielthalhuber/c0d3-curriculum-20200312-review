# JS2 - Arrays: Challenges

- All solutions must be solved recursively. Higher-order functions like `forEach`, `reduce`, `filter`, `find`, or `map` are not allowed.
- These methods will permitted after they have been implemented in the following challenges.

1. Array Generator

   - Goal: write a function called `solution` that takes a number and returns an array with the length equal to the given number. Each element in the array should have a value equal to its index.
   - Examples:

     ```js
     // returns [0]
     solution(1);

     // returns [0, 1, 2, 3]
     solution(4);

     // returns []
     solution(0);

     // returns []
     solution();
     ```

   - Signature:

     - Parameters:

       - `length`: number indicating the length of the array
       - `result`: private, array of index values to return

     - Returns: array

   - Explanation:

     - Base: if `length < 1`, return `result`
     - Recursive:

       - Append the length of `result` to `result`
       - Return a call to `solution`, decrementing `length` by 1

   - [Code](01.js)
   - [Test](01.test.js)

2. Array Callback Generator

   - Goal: write a function called solution that takes a function and returns an array. As long as the function returns `false` when passed the next index, the array keeps growing. Each of the array elements should have a value equal to its index.

     - Examples:

       ```js
       // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       solution((e) => e > 10);

       // returns [0, 1, 2, 3, 4, 5, 6]
       solution((e) => e % 7 === 0 && e !== 0);

       // returns []
       solution((e) => true);
       ```

     - Signature:

       - Parameters:

         - `fun`: function that takes a single argument (number) and returns a boolean
         - `result`: 'private' array of numbers where each element's value is equal to its index

       - Returns: array

     - Explanation:

       - Start with `result = []`
       - Base: if `fun(result.length)` is `false`, then return `result`
       - Recursive:

         - `result.push(result.length)`
         - Return a call to `solution`

     - [Code](02.js)
     - [Test](02.test.js)

3. 2D Array Generator

   - Goal: write a function called `solution` that takes 2 numbers and returns an array with length equal to the first number. Each element in the array is an array with length equal to the second number and all element values equal to 0.
   - Examples:

     ```js
     // returns [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
     solution(5, 2);

     // returns [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
     solution(3, 3);
     ```

   - Signature:

     - Parameters:

       - `row`: number of arrays in the returned array
       - `col`: number of elements in the array elements of the returned array
       - `result`: 'private' array of arrays of equal length, all with zero values

     - Returns: array
     - Dependencies: function called `last` that returns the last element in an array, used to reduce repetition in the solution soce

   - Explanation:

     - Start with `result = []`
     - Base: if the length of `result` is `row` and the length of its last element is `col` when `col > 0` , then return `result`
     - Recursive:

       - If `result` is empty or the last array in `result` has length `col`, then push an empty array into `result`
       - If the last array in `result` has length less than `col`, then push a 0 into that last array
       - Return a call to `solution`

   - [Code](03.js)
   - [Test](03.test.js)

4. Closure Iterator

   - Goal:

     - Write a function called `solution` that takes an array and a function and returns a function.
     - Each time the returned function is called, it returns the result of calling the given function with an element from the given array.
     - The first time the it's called with the first element.
     - Each subsequent call consumes the next element in the array.
     - After the last element is consumed, the next time the function will be called with the first element of the given array so that the process can continue indefinitely.

   - Examples:

     ```js
     const resf1 = solution([5, 2, 1, 3], (e) => {
       return e + 1;
     });
     resf1(); // returns 6
     resf1(); // returns 3
     resf1(); // returns 2
     resf1(); // returns 4
     resf1(); // returns 6

     const resf2 = solution(['hello', 'what', 'a', 'day'], (e) => {
       if (e.length < 2) return '';
       return e;
     });
     resf2(); // returns "hello"
     resf2(); // returns "what"
     resf2(); // returns ""
     resf2(); // returns "day"
     resf2(); // returns "hello"
     resf2(); // returns "what"
     ```

   - Signature:

     - Parameters:

       - `arr`: array that will provide arguments for the given function
       - `cb`: function that will be called with the values of `arr`

     - Returns: array

   - Explanation:

     - Declare a mutable variable `i = -1`
     - Return a function that:
       - Finds the next index: assigns `i` the remainder of `i + 1` divided by the length of `arr`
       - Returns the value of calling `cb` with the value of `arr` at `i`.

   - [Code](04.js)
   - [Test](04.test.js)

5. Delayed Function Calls

   - Goal: write a function called `solution` that takes in an array of functions and a number, and then calls every function in the array after the given number of milliseconds.
   - Examples:

     ```js
     const fun = () => console.log('howdy');

     // after 2 seconds 'howdy' will be logged three times
     solution([fun, fun, fun], 2000);
     ```

   - Signature:

     - Parameters:

       - `arr`: array of functions to call after delay
       - `time`: number of milliseconds of delay before calling the functions in `arr`
       - `i`: 'private' number indicating current index of `arr`

     - Returns: `undefined`

   - Explanation:

     - Start with `i = 0`
     - Base: if `i >= arr.length`, then return/stop
     - Recursive:

       - Set a timeout to call the current function
       - Call `solution`, incrementing `i` by 1

   - [Code](05.js)
   - [Test](05.test.js)

6. Sequential Delayed Function Calls

   - Goal: write a function called `solution` that takes in an array of functions and a number, and then calls each function in sequence. Each function should be called after the given number of milliseconds of delay, after the previous function call.
   - Examples:

     ```js
     const fun = () => console.log('howdy');

     // after 2 seconds 'howdy' will be logged
     // after 4 seconds 'howdy' will be logged
     // after 6 seconds 'howdy' will be logged
     solution([fun, fun, fun], 2000);
     ```

   - Signature:

     - Parameters:

       - `arr`: array of functions to call after delay
       - `time`: number of milliseconds of delay before calling the functions in `arr`
       - `i`: 'private' number indicating current index of `arr`

     - Returns: `undefined`

   - Explanation:

     - Start with `i = 0`
     - Base: if `i >= arr.length`, then return/stop
     - Recursive: call `setTimeout` with:

       - A function that:

         - Calls the function at index `i`
         - Calls `solution`, incrementing `i` by 1

       - Delay of `time` milliseconds

   - [Code](06.js)
   - [Test](06.test.js)

7. cForEach

   - Goal: write a function called `solution` that replicates `Array.prototype.forEach`.
   - Examples:

     ```js
     // logs:
     // 5 0 [5, 8, 7]
     // 8 1 [5, 8, 7]
     // 7 2 [5, 8, 7]
     [5, 8, 7].cForEach((e, i, arr) => {
       console.log(e, i, arr);
     });
     ```

   - Signature:

     - Parameters:

       - `cb`: function to be called for each element in the array with:

         - Parameters:
           - `cv`: value of the current element in the array
           - `in`: index of the current element in the array
           - `ar`: the array that `cForEach` was called on

       - `thisArg`: `this` value to use when calling `cb`
       - `i`: 'private' number corresponding to current index of the array

     - Returns: `undefined`

   - Explanation:

     - Start with `i = 0` and `thisArg = this`
     - Base: if `!cb || i >= this.length`, then stop/return
     - Recursive:

       - Call `cb.call` and pass it `thisArg`, the current value of the array, the current index of the array, and a reference to the array
       - Return a call to `cForEach`, incrementing `i` by 1

   - [Code](07.js)
   - [Test](07.test.js)

8. cMap

   - Goal: write a function called `solution` that replicates `Array.prototype.map`.
   - Examples:

     ```js
     // logs:
     // 5 0 [5, 8, 7]
     // 8 1 [5, 8, 7]
     // 7 2 [5, 8, 7]
     // returns: [5, 9, 9]
     [5, 8, 7].cForEach((e, i, arr) => {
       console.log(e, i, arr);
       return e + i;
     });
     ```

   - Signature:

     - Parameters:

       - `cb`: function to be called for each element in the array with:

         - Parameters:
           - `cv`: value of the current element in the array
           - `in`: index of the current element in the array
           - `ar`: the array that `cMap` was called on

       - `thisArg`: `this` value to use when calling `cb`
       - `i`: 'private' number corresponding to current index of the array
       - `res`: 'private' array of `cb` return values

     - Returns: `undefined`

   - Explanation:

     - Start with `i = 0` and `thisArg = this`
     - Base:

       - If `!cb` throw a `TypeError` with message `'missing argument 0 when calling function Array.prototype.cMap'`
       - If `!cb || i >= this.length`, then return `res`

     - Recursive:

       - Append to `res`: the result of calling `cb.call` with the arguments:
         - `thisArg`
         - The current value of the array
         - The current index of the array
         - A reference to the array
       - Return a call to `cMap`, incrementing `i` by 1

   - [Code](08.js)
   - [Test](08.test.js)

9. cReduce

   - Goal: write a function called `solution` that replicates `Array.prototype.reduce`.
   - Examples:

     ```js
     // logs:
     // 'hi' 5 0 [5, 8, 7]
     // 'hi50' 8 1 [5, 8, 7]
     // 'hi5081' 7 2 [5, 8, 7]
     // result is 'hi508172'
     const result = [5, 8, 7].cReduce((acc, e, i, arr) => {
       console.log(acc, e, i, arr);
       return acc + e + i;
     }, 'hi');
     ```

   - Signature:

     - Parameters:

       - `cb`: function to be called for each element in the array with:

         - Parameters:
           - `ac`: accumulator value used accumulate callback return values. It is the value returned by the previous call of `cb` or the `iv` argument provided to `cReduce`
           - `cv`: value of the current element in the array
           - `in`: index of the current element in the array
           - `ar`: the array that `cReduce` was called on

       - `iv`:

         - Initial value to be for each call of `cb`.
         - For the first call of `cb`, if `iv` was not provided to `cReduce`:
           - If the array is empty, a `TypeError` will be thrown
           - The first element of the array will be used
           - The second element of the array will be the first element to be consumed by `cb`

       - `thisArg`: `this` value to use when calling `cb`
       - `i`: 'private' number corresponding to current index of the array

     - Returns: `undefined`

   - Explanation:

     - Start with `i = 0` and `thisArg = this`
     - Base:

       - If `!cb` throw a `TypeError` with message `'missing argument 0 when calling function Array.prototype.cReduce'`
       - If `i === 0 && iv === undefined`:

         - If `this.length === 0` throw a `TypeError` with message `'cReduce of empty array with no initial value'`
         - Otherwise, return a call to `cReduce` setting the `iv` to the first element of the array, and incrementing `i` by 1

       - If `i >= this.length`, then return `iv`

     - Recursive:

       - Assign to `iv` the value of calling `cb.call` with the arguments:
         - `thisArg`
         - `iv`
         - The current value of the array
         - The current index of the array
         - A reference to the array
       - Return a call to `cReduce`, incrementing `i` by 1

   - [Code](09.js)
   - [Test](09.test.js)

10. cFilter

    - Goal: write a function called `solution` that replicates `Array.prototype.filter`.
    - Examples:

      ```js
      // the following 5 statements will be logged to the console:
      // 5, 0, original array
      // 8, 1, original array
      // 7, 2, original array
      // 6, 3, original array
      // 9, 4, original array
      // result will be [8, 6]
      const result = [5, 8, 7, 6, 9].cFilter((e, i, arr) => {
        console.log(e, i, arr);
        return e % 2 === 0;
      });
      ```

    - Signature:

      - Parameters:

        - `cb`: function to be called for each element in the array with:

          - Parameters:
            - `cv`: value of the current element in the array
            - `in`: index of the current element in the array
            - `ar`: the array that `cFilter` was called on

        - `thisArg`: `this` value to use when calling `cb`
        - `i`: 'private' number corresponding to current index of the array
        - `res`: 'private' array containing the filtered elements

      - Returns: array

    - Explanation:

      - Start with `i = 0` and `thisArg = this`
      - Base:

        - If `!cb` throw a `TypeError` with message `'missing argument 0 when calling function Array.prototype.cFilter'`
        - If `i >= this.length`, then return `res`

      - Recursive:

        - Call `cb.call` with the arguments:
          - `thisArg`
          - The current value of the array
          - The current index of the array
          - A reference to the array
        - If the return value is true, push the current value of the array (`this[i]`) into `res`
        - Return a call to `cFilter`, incrementing `i` by 1

    - [Code](10.js)
    - [Test](10.test.js)

11. cFind

    - Goal: write a function called `solution` that replicates `Array.prototype.find`.
    - Examples:

      ```js
      // the following 5 statements will be logged to the console:
      // 5, 0, original array
      // 8, 1, original array
      // result will be 8
      const result = [5, 8, 7].cFind((e, i, arr) => {
        console.log(e, i, arr);
        return e % 2 === 0;
      });
      ```

    - Signature:

      - Parameters:

        - `cb`: function to be called for each element in the array with:

          - Parameters:
            - `cv`: value of the current element in the array
            - `in`: index of the current element in the array
            - `ar`: the array that `cFind` was called on

        - `thisArg`: `this` value to use when calling `cb`
        - `i`: 'private' number corresponding to current index of the array

      - Returns: array

    - Explanation:

      - Start with `i = 0` and `thisArg = this`
      - Base:

        - If `!cb` throw a `TypeError` with message `'missing argument 0 when calling function Array.prototype.cFind'`
        - If `i >= this.length`, then return/stop
        - Call `cb.call` with the arguments:
          - `thisArg`
          - The current value of the array
          - The current index of the array
          - A reference to the array
        - If the return value is true, return the current value of the array (`this[i]`)

      - Recursive:

        - Return a call to `cFind`, incrementing `i` by 1

    - [Code](11.js)
    - [Test](11.test.js)
