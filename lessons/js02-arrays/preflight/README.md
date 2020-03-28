# JS2 - Preflight

## Example

- Goal:

  - Write a function called `removeCharX` that removes the character at the given index from a string.

- Example:

  ```js
  removeCharX('ABC', 1); // returns "AC"
  removeCharX('ABC', -2); // returns "ABC"
  removeCharX('ABC', 4); // returns "ABC"
  ```

- Signature:
  - Parameters:
    - `str`: public, string
    - `i`: public, number
    - `iCurr`: private, number
    - `result`: private, string
  - Returns: string
- Explanation:
  - Start with `iCurr = 0`
  - Base: if `i` is greater or equal to the length of `str`, then return `result`
  - Recursive:
    - Create `nextChar` and assign it the value of `str` at index `iCurr` to `result` if `iCurr` is not equal to `i`, otherwise assign it the value `''`
    - Return a call to `removeCharX`, incrementing `iCurr` and appending `nextChar` to `result`
- [Code](remove-char-x.js)
- [Test](remove-char-x.test.js)

## Exercises

1. `less3Diff`

   - Goal: Write a function called `less3Diff` that tells whether two strings have fewer than 3 different characters. Both arguments will have the same length.

   - Example:

     ```js
     // returns true because only character at index 2 is different
     less3Diff('spiderman', 'spyderman');

     // returns false (first three characters are different)
     less3Diff('spiderman', 'mary jane');

     // returns false (the characters at indices 4, 5 and 8 are different)
     less3Diff('spiderman', 'spidremal');
     ```

   - Signature:
     - Parameters:
       - `str1`: public, string
       - `str2`: public, string
       - `i`: private, number
       - `count`: private, number
     - Returns: boolean
   - Explanation:
     - Start with `i = 0`
     - Base:
       - If `count > 2` return `false`
       - If `i` is greater than or equal to the length of `str1`, return `true`
     - Recursive:
       - Return a call to `less3Diff`:
         - Incrementing `i` by 1
         - Incrementing `count` by 1 if the values at index `i` of `str1` and `str2` are not equal
   - [Code](less-3-diff.js)
   - [Test](less-3-diff.test.js)
