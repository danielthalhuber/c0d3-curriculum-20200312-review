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
   - Explanation: starting with `result = ''`
     - Base: if `num` is less than 1, return `result`
     - Recursive: return a call to `solution`, reducing `num` by one, and appending `str` to `result`
   - [Code](03.js)
   - [Test](03.test.js)
