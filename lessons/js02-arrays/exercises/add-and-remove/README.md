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
        - `i`: private, number indicating the current index of `arr`
        - `result`: private, array containing copied elements

      - Returns: array

    - Explanation:

      - Start with `i = 0` and `result = []`
      - Base: if `arr` is empty or `result.push() >= arr.length` return `result`
      - Recursive: call `copyArray`, incrementing `i` by 1

    - [Code](copy-array.js)
    - [Test](copy-array.test.js)

2.  Remove Element
3.  Copy Without
4.  Copy Reverse
5.  Copy Last
6.  Copy First
7.  Run on Each
8.  Only Index
