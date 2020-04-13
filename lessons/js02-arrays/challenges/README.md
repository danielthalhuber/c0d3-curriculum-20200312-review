# JS2 - Arrays: Challenges

1. Array Generator

   - Goal: write a function called `solution` that takes a number and returns an array with the length equal to the given number. Each element in the array should have a value equal to its index.
   - Examples:

     ```js
     // returns [0]
     solution(1);

     // returns [0, 1, 2, 3]
     solution(4);

     // returns []
     solution(0);

     // returns []
     solution();
     ```

   - Signature:

     - Parameters:

       - `length`: number indicating the length of the array
       - `result`: private, array of index values to return

     - Returns: array

   - Explanation:

     - Base: if `length < 1`, return `result`
     - Recursive:

       - Append the length of `result` to `result`
       - Return a call to `solution`, decrementing `length` by 1

   - [Code](01.js)
   - [Test](01.test.js)

2. Array Callback Generator
3. 2D Array Generator
4. Closure Iterator
5. Delayed Function Calls
6. Sequential Delayed Function Calls
7. cForEach
8. cMap
9. cReduce
10. cFilter
11. cFind
