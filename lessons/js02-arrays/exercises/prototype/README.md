# JS 2 - Arrays: Prototype Exercises

1. Get Evens

   - Goal: create a prototype method called `getEvens` that returns a _new array_ of all the even numbers in an array of numbers.
   - Examples:

     ```js
     // returns [4, 6]
     [3, 5, 7, 11, 13, 4, 77, 99, 43, 6].getEvens();

     // returns [2, 22, 222, 4444, 44, 4]
     [2, 22, 222, 4444, 44, 4].getEvens();

     // returns []
     [7, 77, 7777, 33, 333, 3].getEvens();
     [].getEvens();
     ```

   - Signature:

     - Parameters:

       - `i`: private, number indicating the current index of `this`
       - `result`: private, array of even numbers

     - Returns: array

   - Explanation:

     - Start with `i = 0` and `result = []`
     - Base: if `i > this.length`, then return `result`
     - Recursive:

       - If the current element of `this` is even, push it onto `result`
       - Return a call to `Array.prototype.getEvens`, incrementing `i` by 1

   - [Code](get-evens.js)
   - [Test](get-evens.test.js)

2. Sum

   - Goal: create a prototype function called `sum` that adds all the elements of an array together.
   - Examples:

     ```js
     // returns 6
     [1, 2, 3].sum();

     // returns 0
     [].sum();
     ```

   - Signature:

     - Parameters:

       - `i`: private, number representing current index of the array
       - `result`: private, number representing sum of values in array

     - Returns: number

   - Explanation:

     - Start with `i = 0` and `result = 0`
     - Base: if `i >= this.length`, then return `result`
     - Recursive: return a call to `this.sum`, incrementing `i` and `result` by 1 and `this[i]` respectively

   - [Code](sum.js)
   - [Test](sum.test.js)

3. Pad

   - Goal: create a prototype method called `pad` that adds a given string to an array a specified number of times.
   - Examples:

     ```js
     // result: arr0 is ['this', 'repeats', 'repeats']
     const arr0 = ['this'];
     arr0.pad('repeats', 2);

     // result: arr1 is ['this has not changed']
     const arr1 = ['this has not changed'];
     arr1.pad('something', 0);
     arr1.pad('something');

     // result: arr2 is ['nothing changes']
     const arr2 = ['nothing changes'];
     arr2.pad('');
     arr2.pad();
     ```

   - Signature:

     - Parameters:

       - `str`: string to append to array
       - `c`: number of times to append `str`

     - Returns: `undefined`

   - Explanation:

     - Base: if `c < 1` or `string === undefined`, then return;
     - Recursive:

       - Append `str` to the array
       - Return a call to `this.pad`, decrementing `c` by 1

   - [Code](pad.js)
   - [Test](pad.test.js)

4. Fizzbuzz

   - Goal: create a prototype method called `fizzbuzz` that changes an array of numbers. All numbers divisible by 3 will be changed to `'fizz'`. All numbers divisible by 5 will be changed to `'buzz'`. All numbers divisible by both 3 and 5 will be converted to `fizzbuzz`. All other numbers will be left untouched.
   - Examples:

     ```js
     // result: arr is ['fizz', 'buzz', 'fizzbuzz', 17]
     const arr = [3, 5, 15, 17];
     arr.fizzbuzz();
     ```

   - Signature:

     - Parameters:

       - `i`: private, number indicating current index of the array

     - Returns: undefined

   - Explanation:

     - Start with `i = 0`
     - Base: if `i >= this.length`, then stop/return
     - Recursive:

       - Declare mutable variable `word = ''`
       - If the current element is divisible by 3, append `'fizz'` to `word`
       - If the current element is divisible by 5, append `'buzz'` to `'word'`
       - If `word` is truthy, replace the current element with `word`
       - Return a call to `this.fizzbuzz`, incrementing `i` by 1

   - [Code](fizzbuzz.js)
   - [Test](fizzbuzz.test.js)

5. Remove Evens
6. Get Iterator
