# JS1 Lesson Challenges

Write a function called solution that...

1. takes in a number and returns a function. Whenever the returned function is called, the next incremental number will be returned

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

2. takes in 2 parameters, a number and a function, and returns a function. Whenever the returned function is called, it returns whatever the input function returns. After the returned function has been called up to the first parameter number of times, calling returned function will always return `null`.

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
       - `i`: private, number
     - Returns: function with signature:
       - Parameter: none
       - Returns: undetermined
   - Explanation: starting with `i = 1`, return a function that:
     - Returns `null` when `i > num`
     - Otherwise increments `i` by 1 and then returns the results of calling `fun`
   - [Code](02.js)
   - [Test](02.test.js)

3. takes in 2 parameters, a number and string and returns the string repeated input parameter number of times

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

4. takes in a function. The function will be called with increasing indices (starting from 0) until the function returns false

   - Example:

     ```js
     solution(e => {
       // this function will be run 7 times with e: 0,1,2,3,4,5,6
       return e < 6;
     });

     solution(e => {
       // this function will be run 1 time with e: 0
       return false;
     });

     counter = solution(e => {
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

5. takes in 2 parameters, a number X and a function, and calls the function X number of times and then returns null.

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

6. takes in a number and returns true if it's prime, false otherwise.

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
     - Base: if `num` is less than 2, or `num` is greater than 2 while being divisible by `i`, then return `false`
     - Recursive:
       - Return `truu` if `i` is greater than or equal to the square root of `num`
       - Otherwise, return a call to `solution`, incrementing `i` by 1
   - [Code](06.js)
   - [Test](06.test.js)

7. takes in 2 parameters, a string and a letter, and returns true if the character exists in the string, false if the character does not exist in the string.

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
     - Base: if `i` is greater than or equal to the length of `inp`, return `false`
     - Recursive:
       - Return `true` if the character at index `i` of `inp` is equal to `letter`
       - Otherwise return a call to `solution`, incrementing `i` by 1
   - [Code](07.js)
   - [Test](07.test.js)