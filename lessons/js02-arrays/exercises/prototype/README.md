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
4. Fizzbuzz
5. Remove Evens
6. Get Iterator
