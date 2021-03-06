# JS1 Lesson Challenges

...

1. Incremental Closure

   - Goal: Write a function called solution that takes in a number and returns a function. Whenever the returned function is called, the next incremental number will be returned

   - Example:

     ```js
     resf = solution(5);
     result = resf(); // 6
     result = resf(); // 7

     res = solution(-5);
     result = resf(); // -4
     result = resf(); // -3
     ```

   - Signature:

     - Parameters:

       - `num`: public, number

     - Returns: function with signature:

       - Parameters: none
       - Returns: number

   - Explanation: return a function that:

     - Increments `num` by one
     - Returns `num`

   - [Code](01.js)
   - [Test](01.test.js)

2. Closure x Times

   - Goal: Write a function called solution that takes in 2 parameters, a number and a function, and returns a function. Whenever the returned function is called, it returns whatever the input function returns. After the returned function has been called up to the first parameter number of times, calling returned function will always return `null`.

   - Example:

     ```js
     resf = solution(3, () => {
       return 'hello';
     });
     result = resf(); // "hello"
     result = resf(); // "hello"
     result = resf(); // "hello"
     result = resf(); // null
     // ...
     result = resf(); // null

     resf = solution(1, () => {
       return 100;
     });
     result = resf(); // 100
     result = resf(); // null
     // ...
     result = resf(); // null
     ```

   - Signature:

     - Parameters:

       - `num`: public, number
       - `fun`: public, function

     - Returns: function with signature:

       - Parameter: none
       - Returns: undetermined

   - Explanation: return a function that:

     - Returns `null` when `num < 0`
     - Decrements `num` by 1
     - Returns the results of calling `fun`

   - [Code](02.js)
   - [Test](02.test.js)

3. Repeated String

   - Goal: Write a function called solution that takes in 2 parameters, a number and string and returns the string repeated input parameter number of times

   - Example:

     ```js
     result = solution(3, 'abc'); // "abcabcabc"
     result = solution(0, 'hello'); // ""
     ```

   - Signature:

     - Parameters:

       - `num`: public, number
       - `str`: public, string
       - `result`: private, string

     - Returns: string

   - Explanation:

     - Starting with `result = ''`
     - Base: if `num` is less than 1, return `result`
     - Recursive: return a call to `solution`, reducing `num` by one, and appending `str` to `result`

   - [Code](03.js)
   - [Test](03.test.js)

4. Calling Input Function

   - Goal: Write a function called solution that takes in a function. The function will be called with increasing indices (starting from 0) until the function returns false

   - Example:

     ```js
     solution((e) => {
       // this function will be run 7 times with e: 0,1,2,3,4,5,6
       return e < 6;
     });

     solution((e) => {
       // this function will be run 1 time with e: 0
       return false;
     });

     counter = solution((e) => {
       // this function will be run 3 times with e: 0,1,2
       return e < 3;
     });
     ```

   - Signature:

     - Parameters:

       - `fun`: public, function
       - `i`: private, number

     - Returns: undetermined

   - Explanation:

     - Starting with `i = 0`
     - Base: if the result of calling the `fun(i)` returns a falsey value, then return `null`
     - Recursive: return a call to `solution`, incrementing `i` by 1

   - [Code](04.js)
   - [Test](04.test.js)

5. Calling Function x Times

   - Goal: Write a function called solution that takes in 2 parameters, a number X and a function, and calls the function X number of times and then returns null.

   - Example:

     ```js
     let counter = 0;
     solution(2, () => {
       counter += 1;
     }); // counter will be 2

     counter = 0;
     solution(3, () => {
       counter += 1;
     }); // counter will be 3
     ```

   - Signature:

     - Parameters:

       - `num`: public, number
       - `fun`: public, function
       - `i`: private, number

     - Returns: undetermined

   - Explanation:

     - Base: if `num` is less than 1, return `null`
     - Recursive:
       - Call `fun`
       - Return a call to solution, decrementing `num` by 1

   - [Code](05.js)
   - [Test](05.test.js)

6. isPrime

   - Goal: Write a function called solution that takes in a number and returns true if it's prime, false otherwise.

   - Example:

     ```js
     result = solution(2); // true
     result = solution(1); // false
     result = solution(8); // false
     result = solution(13); // true
     ```

   - Signature:

     - Parameters:

       - `num`: public, number
       - `i`: private, number

     - Returns: boolean

   - Explanation:

     - Starting with `i = 2`
     - Base:

       - If `num` is less than 2, or `num` is greater than 2 while being divisible by `i`, then return `false`
       - Return `true` if `i` is greater than or equal to the square root of `num`

     - Recursive:

       - Otherwise, return a call to `solution`, incrementing `i` by 1

   - [Code](06.js)
   - [Test](06.test.js)

7. Letter Find

   - Goal: Write a function called solution that takes in 2 parameters, a string and a letter, and returns true if the character exists in the string, false if the character does not exist in the string.

   - Example:

     ```js
     result = solution('abc', 'a'); // true
     result = solution('abc', 'd'); // false
     ```

   - Signature:

     - Parameters:

       - `inp`: public, string
       - `letter`: public, string
       - `i`: private, number

     - Returns: boolean

   - Explanation:

     - Starting with `i = 0`
     - Base:

       - Return `false` if `i` is greater than or equal to the length of `inp`
       - Return `true` if the character at index `i` of `inp` is equal to `letter`

     - Recursive:

       - Otherwise return a call to `solution`, incrementing `i` by 1

   - [Code](07.js)
   - [Test](07.test.js)

8. Letter Count

   - Goal: Write a function called solution that takes in 2 parameters, a string and a letter, and returns the number of times the character shows up in the string

   - Example:

     ```js
     result = solution('abc', 'a'); // 1
     result = solution('bccbccb', 'b'); // 3
     ```

   - Signature:

     - Parameters:

       - `str`: public, string
       - `char`: public, string
       - `count`: private, number
       - `i`: private, number

     - Returns: number

   - Explanation:

     - Starting with `count` and `i` at 0
     - Base: if `i` is greater than or equal to the length of `str`, return `count`
     - Recursive: return a call to `solution` with:

       - `count` incremented by 1 if the value at index `i` of `str` equals `char`
       - `i` incremented by 1

   - [Code](08.js)
   - [Test](08.test.js)

9. Letter Map

   - Goal: Write a function called solution that takes in 2 parameters, a string and a function, and returns combined result of the function being called with every character in the string.

   - Example:

     ```js
     fun = (e) => {
       return '9';
     };
     result = solution('hello', fun); // "99999"

     fun = (e) => {
       return e + '123';
     };
     result = solution('blah', fun); // "b123l123a123h123"
     ```

   - Signature:

     - Parameters:

       - `str`: public, string
       - `fun`: public, function
       - `result`: private, string
       - `i`: private, number

     - Returns: string

   - Explanation:

     - Starting with `result = ''` and `i = 0`
     - Base: if `i` is greater than or equal to the length of `str`, then return `result`
     - Recursive: return a call to `solution`, appending the value of `fun(i)` to `result`, and incrementing `i` by 1

   - [Code](09.js)
   - [Test](09.test.js)

10. Letter Loop

    - Goal: Write a function called solution that takes in 2 parameters, a string and a function, and returns a function such that:

    > - When the returned function is called for the first time, the input function will be called with the first character of the string.
    > - When the returned function is called for the second time, the input function will be called with the second character of the string.
    > - After the input function is called with the last character of the string, calling the returned function will (repeat #1, then #2, etc.).

    - Example:

      ```js
      tracker = '';
      fun = solution('hel2', (e) => {
        tracker = tracker + e;
      });
      fun(); // tracker -> 'h'
      fun(); // tracker -> 'he'
      fun(); // tracker -> 'hel'
      fun(); // tracker -> 'hel2'
      fun(); // tracker -> 'hel2h'
      fun(); // tracker -> 'hel2he'
      ```

    - Signature:

      - Parameters:

        - `str`: public, string
        - `fun`: public, function

      - Returns: function with signature:

        - Parameters: none
        - Returns: `undefined`
        - Side effects:

          - Calls `fun`
          - Mutates `i`

    - Explanation:

      - Declare a mutable variable `i = 0`
      - Return a function that:

        - Calls `fun(i)`
        - Sets `i` to the remainder of `i + 1` divided by the length of `str`

    - [Code](10.js)
    - [Test](10.test.js)

11. Delayed Closure

    - Goal: Write a function called solution that takes in 2 parameters, a number and a function, and returns a function. When the returned function is called, the input function will execute after input number milliseconds.

    - Example:

      ```js
      fun = solution(1800, (e) => {
        console.log('hello');
      });
      fun(); // 'hello' will be printed out 1800ms after this function is called
      fun(); // 'hello' will be printed out 1800ms after this function is called
      ```

    - Signature:

      - Parameters:

        - `a`: public, number
        - `fun`: public, function

      - Returns: function with signature:

        - Parameters: none
        - Returns: number (timeout/interval id)
        - Side effect: calls `setTimeout`

    - Explanation: return a function that calls `setTimeout` with callback `fun` and duration `a`
    - [Code](11.js)
    - [Test](11.test.js)

12. Delay 1 and 2

    - Goal: Write a function called solution that takes in 2 parameters, a number and a function. It should execute the input function (which returns a number) after first input parameter milliseconds. The input function should be called again after waiting the returned number of seconds.

    - Example:

      ```js
      solution(1800, () => {
        // This function will be run 1800ms after solution is called,
        //   and after that, it will be run after another 3600ms
        console.log('hello');
        return 3600;
      });
      ```

    - Signature:

      - Parameters:

        - `a`: public, number
        - `fun`: public, function

      - Returns: `undefined`
      - Side effect: calls `setTimeout`

    - Explanation:

      - Call `setTimeout` with the following parameters:

        - Callback: function that calls `setTimeout` with the parameters:

          - Callback: `fun`
          - Duration: value returned by calling `fun`

        - Duration: `a`

    - [Code](12.js)
    - [Test](12.test.js)
