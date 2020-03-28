# JS2 - Preflight

## Example:

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
