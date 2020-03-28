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
