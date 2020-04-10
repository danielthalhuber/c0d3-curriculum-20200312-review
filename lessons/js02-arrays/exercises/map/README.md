# JS2 - Arrays: Map Exercises

Exercises using `Array.prototype.map`

1. Odd to Zero

   - Goal: write a function called `oddToZero` that copies an array while turning all odd elements to 0.
   - Examples:

     ```js
     // returns [0, 2, 0, 4, 0, 6]
     oddToZero([1, 2, 3, 4, 5, 6]);

     // returns [0, 0, 0]
     oddToZero(1, 9, 7);

     // returns [2, 4, 6]
     oddToZero([2, 4, 6]);
     ```

   - Signature:

     - Parameters:

       - `arr`: array

     - Returns: array

   - Explanation: return the result of calling `map` on `arr` where the callback function returns 0 if the value it receives is odd
   - [Code](odd-to-zero.js)
   - [Test](odd-to-zero.test.js)

2. First Letters

   - Goal: write a function called `firstLetters` that returns the first letter of each string in an array of strings.
   - Examples:

     ```js
     // returns: ['a', 'b', 'c', 'd']
     firstLetters(['add', 'bongo', 'chongo', 'dud']);
     ```

   - Signature:

     - Parameters:

       - `arr`: array of strings

     - Returns: array

   - Explanation: return the result of calling `map` on `arr` with a callback that returns the character at index 0 of the given string

   - [Code](first-letters.js)
   - [Test](first-letters.test.js)

3. First X to Zero
4. Non Prime to Zero
5. Append
6. Run on Each with Map
7. Clone
