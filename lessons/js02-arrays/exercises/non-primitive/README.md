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
3. First X to Zero
4. All Prime
5. Increasing Numbers
