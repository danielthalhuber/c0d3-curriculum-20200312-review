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

   - Goal: write a function called solution that takes a function and returns an array. As long as the function returns `false` when passed the next index, the array keeps growing. Each of the array elements should have a value equal to its index.

     - Examples:

       ```js
       // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       solution((e) => e > 10);

       // returns [0, 1, 2, 3, 4, 5, 6]
       solution((e) => e % 7 === 0 && e !== 0);

       // returns []
       solution((e) => true);
       ```

     - Signature:

       - Parameters:

         - `fun`: function that takes a single argument (number) and returns a boolean
         - `result`: 'private' array of numbers where each element's value is equal to its index

       - Returns: array

     - Explanation:

       - Start with `result = []`
       - Base: if `fun(result.length)` is `false`, then return `result`
       - Recursive:

         - `result.push(result.length)`
         - Return a call to `solution`

     - [Code](02.js)
     - [Test](02.test.js)

3. 2D Array Generator
4. Closure Iterator
5. Delayed Function Calls
6. Sequential Delayed Function Calls
7. cForEach
8. cMap
9. cReduce
10. cFilter
11. cFind
