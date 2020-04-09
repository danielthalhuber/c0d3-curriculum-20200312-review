# JS2 - Arrays: Add and Remove Functions Exercises

1.  Copy Array

    - Goal: write a function called `copyArray` that takes in an array and returns a **new array** that is an identical copy.
    - Examples:

      ```js
      // returns [1, 2, 3]
      copyArray([1, 2, 3]);

      // returns []
      copyArray([]);
      ```

    - Signature:

      - Parameters:

        - `arr`: public, array to be copied
        - `result`: private, array containing copied elements

      - Returns: array

    - Explanation:

      - Start with `result = []`
      - Base: if `result.length >= arr.length`, return `result`
      - Recursive:

        - Push the current element of `arr` into `result`
        - call `copyArray`, incrementing `i` by 1

    - [Code](copy-array.js)
    - [Test](copy-array.test.js)

2.  Remove Element
3.  Copy Without
4.  Copy Reverse
5.  Copy Last
6.  Copy First
7.  Run on Each
8.  Only Index
