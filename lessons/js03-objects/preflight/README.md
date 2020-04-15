# JS3 - Objects: Preflight

1. Merge Arrays

   - Goal: write a function called `mergeArrays` that combines two arrays into one.
   - Examples:

     ```js
     // returns [1, 2, 3, 4, 5, 6]
     mergeArrays([1, 2, 3], [4, 5, 6]);

     // each returns [1, 2, 3]
     mergeArrays([1, 2, 3]);
     mergeArrays([1, 2, 3], []);
     mergeArrays([], [1, 2, 3]);

     // each returns []
     mergeArrays([], []);
     mergeArrays([]);
     mergeArrays();
     ```

   - Signature:

     - Parameters:

       - `ar1`: the first array to be merged
       - `ar2`: the second array to be merged

     - Returns: array

   - Explanation: return the result of spreading the elements of the two arrays into a new array, in order.
   - [Code](merge-arrays.js)
   - [Test](merge-arrays.test.js)

2. First Longer Than

   - Goal: write a function called `firstLongerThan` that finds the first string in an array which is longer than the given number.
   - Examples:

     ```js
     // returns 'cc'
     firstLongerThan(['a', 'b', 'cc', 'dd', 'eee'], 1);

     // each returns undefined
     firstLongerThan(['a', 'b', 'c'], 1);
     firstLongerThan([], 1);
     firstLongerThan();
     ```

   - Signature:

     - Parameters:

       - `ar`: array of strings to be searched
       - `longerThan`: length of string which is 1 less than the target

     - Returns: any

   - Explanation:

     - Return the result of calling `find` on `ar` with a function that takes a string and returns true if the string's length is greater than `longerThan`

   - [Code](first-longer-than.js)
   - [Test](first-longer-than.test.js)

3. Get Return Values

   - Goal: write a function called `getReturnedValues` that takes an array of functions and returns an array of the values returned by those functions.
   - Examples:

     ```js
     // returns [1, 2, 3]
     getReturnedValues([() => 1, () => 2, () => 3]);

     // each returns []
     getReturnedValues([]);
     getReturnedValues();
     ```

   - Signature:
     - Parameters: `arr`: array of functions
     - Returns: array
   - Explanation: return the result of calling `map` on `arr` with a callback that executes returns the result of calling a given function
   - [Code](get-returned-values.js)
   - [Test](get-returned-values.test.js)

4. Zero Square

   - Goal: write a function called `zeroSquare` that takes a number and returns a square two dimensional array of zeros with dimensions (array length and array element length each) equal to the given number. The arrays should be filled with zeros.
   - Examples:

     ```js
     // returns undefined
     zeroSquare(-47);
     zeroSquare(0);
     zeroSquare();

     // returns [[0]]
     zeroSquare(1);

     // returns [[0, 0], [0, 0]]
     zeroSquare(2);
     ```

   - Signature:

     - Parameters: `n`: number representing the square length
     - Returns: array or `undefined`

   - Explanation:

     - If `n` is not an integer greater than 0, return/stop
     - Return the result of calling the array constructor for `n` elements, filling each element with `null` value, and then mapping those `null` values to the result of calling the array constructor for `n` elements and filling that array with 0s

   - [Code](zero-square.js)
   - [Test](zero-square.test.js)
