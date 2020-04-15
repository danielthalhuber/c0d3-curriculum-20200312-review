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
3. Get Return Values
4. Zero Square
