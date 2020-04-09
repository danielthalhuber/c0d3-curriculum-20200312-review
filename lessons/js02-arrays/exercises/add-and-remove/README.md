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
       - Return a call to `copyArray`, incrementing `i` by 1

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
       - Return a call to `removeArray`, incrementing `i` by 1

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
       - Return a call to `copyWithout`, incrementing `i`

   - [Code](copy-without.js)
   - [Test](copy-without.test.js)

4. Copy Reverse

   - Goal: write a function called `copyReverse` that takes an array and returns a copy with the elements in reverse order.
   - Examples:

     ```js
     // returns [3, 2, 1]
     copyReverse([1, 2, 3]);

     // returns [1]
     copyReverse([1]);
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array to be copied
       - `i`: private, number indicating current index of `arr`, relative to the last index
       - `reverse`: private, array copy of `arr` in reverse order

     - Returns: array

   - Explanation:

     - Start with `i = 0` and `reverse = []`
     - Base: if `i >= arr.length`, then return `reverse`
     - Recursive:

       - Push the element at index `length - (1 + i)` in `arr` into `reverse`
       - Return a call to `copyReverse`, incrementing `i`

   - [Code](copy-reverse.js)
   - [Test](copy-reverse.test.js)

5. Copy Last

   - Goal: write a function called `copyLast` that takes an array and a number, and returns a copy, excluding the specified number of elements from the beginning of the array.
   - Examples:

     ```js
     // returns [3, 4, 5]
     copyLast([1, 2, 3, 4, 5], 2);

     // all return [1, 2, 3]
     copyLast([1, 2, 3], -1);
     copyLast([1, 2, 3], 0);
     copyLast([1, 2, 3]);

     // all return []
     copyLast([1, 2, 3], 3);
     copyLast([1, 2, 3], 4);
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array to be copied
       - `exclude`: public, number of elements to exclude from the beginning
       - `i`: private, number corresponding to index of `arr`
       - `result`: private, array copy of `arr`

     - Returns: array

   - Explanation:

     - Start with `i = 0` and `result = []`
     - Base: if `i >= arr.length` then return `result`
     - Recursive:

       - If `i >= exclude`, append the element at `i` to `result`
       - Return a call to `copyLast`, incrementing `i` by 1

   - [Test](copy-last.js)
   - [Code](copy-last.test.js)

6. Copy First

   - Goal: write a function called `copyFirst` that takes an array and a number, and returns a copy, excluding the specified number of elements from the end of the array.
   - Examples:

     ```js
     // returns [1, 2, 3]
     copyFirst([1, 2, 3, 4, 5], 2);

     // all return [1, 2, 3]
     copyFirst([1, 2, 3], -1);
     copyFirst([1, 2, 3], 0);
     copyFirst([1, 2, 3]);

     // all return []
     copyFirst([1, 2, 3], 3);
     copyFirst([1, 2, 3], 4);
     ```

   - Signature:

     - Parameters:

       - `arr`: public, array to be copied
       - `exclude`: public, number of elements to exclude from the end
       - `i`: private, number corresponding to index of `arr`
       - `result`: private, array copy of `arr`

     - Returns: array

   - Explanation:

     - Start with `i = 0` and `result = []`
     - Base: if `i >= arr.length` then return `result`
     - Recursive:

       - If `i < arr.length - exclude`, append the element at `i` to `result`
       - Return a call to `copyFirst`, incrementing `i` by 1

   - [Test](copy-first.js)
   - [Code](copy-first.test.js)

7. Run on Each
8. Only Index
