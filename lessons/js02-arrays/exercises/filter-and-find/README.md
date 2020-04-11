# JS2 - Arrays: Filter and Find Exercises

1. No More Evens

   - Goal: use `filter` to write a function called `noMoreEvens` that copies an array, removing all even numbers.
   - Example:

     ```js
     // returns [1, 3, 7]
     noMoreEvens([-2, 0, 1, 2, 3, 4, 7]);

     // returns [1, 9, 'chicken']
     noMoreEvens([1, 2, 9, 'chicken']);

     // returns undefined
     noMoreEvens();

     // returns []
     noMoreEvens([]);
     ```

   - Signature:

     - Parameters: `arr`: the array to be copied
     - Returns: array or `undefined`

   - Explanation:

     - If `arr` is not an array, return `undefined`
     - Return the result of calling `filter` on `arr` with a function that returns true if a given value is not an even number

   - [Code](no-more-evens.js)
   - [Test](no-more-evens.test.js)

2. Primes Only
3. First Prime
