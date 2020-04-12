# JS2 - Arrays: Reduce Exercises

Use `Array.prototype.reduce` to solve the following exercises.

1. Sum

   - Goal: write a function called `sum` that adds up all the elements of an array.
   - Examples:

   ```js
   // returns 7
   sum([1, 2, 4]);

   // returns 0
   sum([1, -1]);

   // returns 0
   sum([]);

   // each returns undefined
   sum(2);
   sum();
   ```

   - Signature:

     - Parameters: `arr`: array of numbers to be summed
     - Returns: number or `undefined`

   - Explanation: if `arr` is not an array, return `undefined`, otherwise return the result of calling `reduce` on `arr` with a `reducer` that returns the sum of the accumulator and current values.
   - [Code](sum.js)
   - [Test](sum.test.js)

2. Largest with Reduce
3. Longest
4. Matches
5. Combine Less 5
6. Larger Than 5
