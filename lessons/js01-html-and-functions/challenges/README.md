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
