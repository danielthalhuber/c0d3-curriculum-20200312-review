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

   - Goal: write a function called `largest` that returns the largest value in an array of numbers.
   - Example:

     ```js
     // returns 700
     largest([2, 34, 45, -43, 700, 3, 2]);

     // returns -8
     largest([-900, -2000, -14, -8, -1200, -9]);

     // returns undefined for non-array arguments
     largest();
     largest('one');
     ```

   - Signature:

     - Parameters: `arr`: array of numbers to evaluate
     - Return: array or undefined

   - Explanation:

     - If `arr` is not an array, return `undefined`
     - Return the result of calling `reduce` on `arr` with a reducer that returns the larges of the accumulator and current value, with an initial value of `Number.NEGATIVE_INFINITY`

   - [Code](largest.js)
   - [Test](largest.test.js)

3. Longest

   - Goal: write a function called `longest` that returns the longest string in an array.
   - Example:

     ```js
     // returns 'onetwothree'
     longest(['one', 'onetwothree', 'threetwo']);

     // returns ''
     longest(['', '', '']);

     // returns undefined for non-array arguments
     largest();
     largest('one');
     ```

   - Signature:

     - Parameters: `arr`: array of strings to evaluate
     - Return: array or undefined

   - Explanation:

     - If `arr` is not an array, return `undefined`
     - Return the result of calling `reduce` on `arr` with a reducer that returns the largest of the accumulator and current value (comparing their length properties), with an initial value of -1

   - [Code](longest.js)
   - [Test](longest.test.js)

4. Matches

   - Goal: write a function called `matches` that returns the number of times a given element occurs in an array.
   - Example:

     ```js
     // returns 2
     matches(['one', 'two', 'three', 'one', 'five'], 'one');

     // returns 0
     matches([1, 2, 3, 'four'], 6);
     matches(['one']);
     matches([], 'bonkers');

     // returns undefined for invalid arguments
     matches([1, 2, 3]);
     matches('two');
     matches();
     ```

   - Signature:

     - Parameters:

       - `arr`: array to be evaluated
       - `value`: value to count in `arr`

     - Returns: number or undefined

   - Explanation:

     - If `arr` is not an array, then return `undefined`
     - Return the value returned by calling `reduce` on `arr` with:
       - a reducer that returns 1 + accumulator if the current value is strictly equal to the given `value`
       - initial value of 0

   - [Code](matches.js)
   - [Test](matches.test.js)

5. Combine Less 5

   - Goal: write a function called `combineLess5` that returns the concatenation of all the strings in a given array with length less than 5.
   - Examples:

     ```js
     // returns 'this is it'
     combineLess5(['t', 'his', ' is ', 'it', 'donkey']);

     // returns undefined for invalid arguments
     matches('two');
     matches();
     ```

   - Signature:

     - Parameters: `arr`: array of strings to be concatenated
     - Returns: array or undefined

   - Explanation:

     - If `arr` is not an array, return `undefined`
     - Return the result of calling `reduce` on `arr` with a reducer that:
       - Returns the concatenation of the accumulator with the current value if the current value has length less than 5, and otherwise returns the accumulator
       - Has an initial value of ''

   - [Code](combine-less-5.js)
   - [Test](combine-less-5.test.js)

6. Larger Than 5

   - Goal: write a function called `largerThan5` copies an array of numbers, including only the numbers that are greater than 5.
   - Examples:

     ```js
     // returns [6, 7, 8, 9]
     largerThan5([1, 2, 3, 4, 5, 6, 7, 8, 9]);

     // each returns []
     largerThan5([]);
     largerThan5([1, 2, 3, 4, 5]);

     // returns undefined for non-array values
     largerThan5('six');
     largerThan5();
     ```

   - Signature:

     - Parameters:

       - `arr`: array of numbers to filter

     - Returns: number or `undefined`

   - Explanation:

     - If `arr` is not an array, return `undefined`
     - Return the result of calling `reduce` on `arr` with:

       - A reducer that:

         - Pushes the current value into the accumulator if the current value is greater than 5
         - Returns the accumulator

       - Initial value: []

   - [Code](larger-than-5.js)
   - [Test](larger-than-5.test.js)
