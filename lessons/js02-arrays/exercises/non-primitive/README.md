# JS2 - Arrays: Non-Primitive Exercises

1. Selective Zero

   - Goal: write a function called `selectiveZero` that changes all instances of a given number in an array to 0.
   - Examples:

     ```js
     // mutates values to [1, 0, 3]
     selectiveZero([1, 2, 3], 2);

     // leaves values untouched ['1', 1]
     selectiveZero(['1', 1], 1);

     // leaves values untouched [undefined, 3, 1, '']
     selectiveZero([undefined, 3, 1, ''], 0);
     ```

   - Signature:

     - Parameters:

       - `arr`, public, array with values to be transformed
       - `num`, public, number to be converted to zero in `arr`
       - `i`, private, number indicating current index of `arr`

     - Returns: `undefined`
     - Side-effect: mutates `arr`

   - Explanation:

     - Start with `i = 0`
     - Base case: if `i >= arr.length` return/stop
     - Recursive:

       - Set `arr[i]` to 0 if its current value is equal to `num`
       - Return a call to `selectiveZero`, incrementing `i` by 1

   - [Code](selective-zero.js)
   - [Test](selective-zero..test.js)

2. Largest Number

   - Goal: write a function called `largest` that returns the larges number in an array.
   - Examples:

     ```js
     // returns 3
     largest([1, 2, 3]);

     // returns -1
     largest([-1, -47, -2]);

     // returns 4
     largest([4, 2, 0]);
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array of numbers
       - `i`: private, number indicating current index of `arr`
       - `max`: private, number indicating current largest known number in `arr`

     - Returns: number

   - Explanation:

     - Start with `i = 0` and `max = arr[0]`
     - Base: if `i >= arr`, then return `max`
     - Recursive:

       - Assign `max` the larger of `max` and `arr[i]`
       - Return a call to `largest`, incrementing `i` by 1

   - [Code](largest.js)
   - [Test](largest.test.js)

3. First X to Zero

   - Goal: write a function called `firstXToZero` that takes an array and a number, and then sets the first (given) number of elements to 0.
   - Examples:

     ```js
     // does not mutate the array
     firstXToZero([1, 2, 3, 4, 5], 0);

     // mutates the array to [0, 2, 3, 4, 5]
     firstXToZero([1, 2, 3, 4, 5], 1);

     // mutates the array to [0, 0, 0, 4, 5]
     firstXToZero([1, 2, 3, 4, 5], 3);
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array
       - `count`: public, number of elements to assign a value of 0 to
       - `i`: public, number indicating the current index of `arr`

   - Explanation:

     - Start with `i` and `count` both assigned a value of `0`
     - Base: if `i >= count` or `i >= arr.length`, return/stop
     - Recursive:

       - Assign 0 to `arr[i]`
       - Return a call to `firstXToZero`, incrementing `i` by 1

   - [Code](first-x-to-zero.js)
   - [Test](first-x-to-zero.test.js)

4. All Prime

   - Goal: write a function called `allPrime` that takes an array and returns `true` if every number in the array is a prime number and `false` otherwise.
   - Examples:

     ```js
     // returns true
     allPrime([2, 3, 5, 7]);

     // returns false
     allPrime([-1, 0, 1, 2]);

     // returns false
     allPrime([4, 6, 8, 21]);
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array of numbers
       - `i`: private, number corresponding to the current index of `arr`

     - Returns: boolean
     - Dependencies: helper function `isPrime` that takes a number and returns `true` if the number is prime and `false` otherwise

   - Explanation:

     - Start with `i = 0`
     - Base:

       - if `arr.length` and `i > arr.length` return `true`
       - if `!arr.length` or `isPrime(arr[i])` is `false` return `false`

     - Recursive: return a call to `isPrime`, incrementing `i` by 1

   - [Code](all-prime.js)
   - [Test](all-prime.test.js)

5. Increasing Numbers
