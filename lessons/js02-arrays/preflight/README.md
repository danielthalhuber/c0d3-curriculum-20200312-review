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

2. `reverso`

   - Goal:

     - Write a function called `reverso` that takes in a string, and returns a new string with the input string reversed.

   - Example:

     ```js
     reverso('abc'); // returns 'cba'
     reverso(' aaaa'); // returns 'aaa '
     reverso('aba'); // returns 'aba'
     ```

   - Signature:
     - Parameters:
       - `str`: public, string
       - `i`: private, number
       - `result`: private, string
     - Returns: string
   - Explanation:
     - Start with `i = 1`
     - Base: if `i > str.length`, return `result`
     - Recursive: return a call to `reverso` and:
       - Increment `i` by 1
       - Append the value `str[str.length - i]` to `result`
   - [Code](reverso.js)
   - [Test](reverso.test.js)

3. `- Write a function called`delayAndCall`that takes in 2 arguments, a number and a function, and returns a function.`

   - Goal:

     - Write a function called `delayAndCall` that takes in 2 arguments, a number and a function, and returns a function.
     - When the returned function is called, the input function will execute after input number milliseconds.

   - Example:

     ```js
     const fun = delayAndCall(1000, () => {
       console.log('I am groot');
     });
     fun(); // after 1 second, 'I am groot' will be logged
     fun(); // after 1 second, 'I am groot' will be logged
     ```

   - Signature:
     - Parameters:
       - `delay`: public, number
       - `fun`: public, function
     - Returns: function with signature:
       - Parameters: none
       - Returns: undetermined
       - Side effects: undetermined
   - Explanation: return a function that when called, calls `setTimeout` with the parameters `fun` and `delay`.
   - [Code](delay-and-call.js)
   - [Test](delay-and-call.test.js)
