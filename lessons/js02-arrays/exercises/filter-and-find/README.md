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

   - Goal: write a function called `primesOnly` that copies an array but keeps only the prime numbers.
   - Examples:

     ```js
     // returns [2, 3, 5, 7, 11, 13]
     primesOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

     // returns []
     primesOnly([]);

     // returns undefined
     primesOnly(2);
     ```

   - Signature:

     - Parameters: `arr`: the array to be copied
     - Returns: array or `undefined`
     - Dependency: `isPrime`: a function that returns `true` if a given number is prime and `false` otherwise

   - Explanation: if `arr` is not an array return `undefined`, otherwise return the result of calling `filter` on `arr` with `isPrime`
   - [Code](primes-only.js)
   - [Test](primes-only.test.js)

3. First Prime

   - Goal: write a function called `firstPrime` that finds the first prime number in an array.
   - Examples:

     ```js
     // returns 2
     firstPrime([14, 16, 18, 'donkey', 2]);

     // each returns undefined
     firstPrime([14, 16, 18, 'donkey']);
     firstPrime();
     firstPrime('no an array');
     ```

   - Signature:

     - Parameters: `arr`: the array to be searched
     - Returns: array or undefined
     - Dependencies: requires a function called `isPrime` that returns `true` if the given value is a prime number, and `false` otherwise

   - Explanation: if `arr` is not an array assign it the value `[]`, and then return the value returned by calling `find` on `arr` with the function `isPrime`
   - [Code](first-prime.js)
   - [Test](first-prime.test.js)
