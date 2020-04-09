# JS2 - Arrays: Add and Remove Functions Exercises

1. Copy Array

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

2. Remove Element

   - Goal: write a function called `removeElement` that removes every instance of a given element from an array.
   - Examples:

     ```js
     const arr = [1, 2, 2, 3, 3, 3];
     const newArr = removeElement(arr, 2);

     // true, both have the values [1, 3, 3, 3]
     arr === newArr;
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array to be evaluated
       - `remove`: public, value of elements to be removed
       - `i`: private, number indicating current index of `arr`

     - Returns: array

   - Explanation:

     - Start with `i = 0`
     - Base: if `i >= arr.length` return `arr`
     - Recursive:

       - If the current value of `arr` is equal to `remove`, splice the element and decrement `i` by 1
       - Call `removeArray`, incrementing `i` by 1

   - [Code](remove-element.js)
   - [Test](remove-element.test.js)

3. Copy Without

   - Goal: write a function called `copyWithout`that makes a copy of an array, but without any instances of a specified element.
   - Examples:

   ```js
   // returns [1, 2]
   copyWithout([1, 2, 3], 3);
   ```

   - Signature:

     - Parameters:

       - `arr`: public, array to be copied
       - `exclude`, public, value to be excluded
       - `i`: private, number indicating current index of `arr`
       - `result`, private, copied array

     - Returns: array

   - Explanation:

     - Start with `i = 0` and `result = []`
     - Base: if `i >= arr.length` then return `result`
     - Recursive:

       - If the current value of `arr` is not equal to `exclude`, then push it onto `result`
       - Call `copyWithout`, incrementing `i`

   - [Code](copy-without.js)
   - [Test](copy-without.test.js)

4. Copy Reverse
5. Copy Last
6. Copy First
7. Run on Each
8. Only Index
