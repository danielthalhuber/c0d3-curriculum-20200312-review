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
   - Code
   - Test

4. Zero Square
