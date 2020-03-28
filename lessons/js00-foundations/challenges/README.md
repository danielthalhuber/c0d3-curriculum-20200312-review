# JS0 Lesson Challenges

Write an arrow function called solution that...

1. takes in 2 numbers and return the sum of the 2 input parameters

   ```js
   solution(5, 9); // Should return 14
   solution(4, 1); // Should return 5
   ```

   - [solution](01.js)
   - [test](01.test.js)

2. takes in 3 numbers and returns the sum of the 3 input parameters

   ```js
   solution(5, 9, 2); // Should return 16
   solution(4, 1, 9); // Should return 14
   ```

3. takes in a number and returns true if the input number is greater than 5. Otherwise returns false

   ```js
   solution(9); // Should return true
   solution(4); // Should return false
   ```

4. takes in 2 numbers and returns the larger number.

   ```js
   solution(5, 9); // Should return 9
   solution(4, 1); // Should return 4
   ```

5. takes in 3 numbers and return the largest number.

   ```js
   solution(5, 9, 14); // Should return 14
   solution(4, 5, 1); // Should return 5
   ```

6. takes in 2 numbers and returns true if the first input parameter is greater than the second. Otherwise returns false

   ```js
   solution(5, 9); // Should return false
   solution(4, 1); // Should return true
   ```

7. takes in 2 numbers and returns true if the sum of the 2 numbers is greater than 10. Otherwise returns false

   ```js
   solution(5, 9); // Should return true
   solution(4, 1); // Should return false
   ```

8. takes in 2 numbers and returns a function. When the returned function is called, return the sum of the 2 input parameters.

   ```js
   resf = solution(5, 6); // a is a function
   result = resf(); // result is 11
   ```

9. takes in 2 numbers and returns a function. The returned function takes in a number and will return the sum of all 3 numbers when called

   ```js
   resf = solution(1, 2); // a is a function
   result = resf(1); // result is 4 because 1+2+1
   result = resf(5); // result is 8 because 1 + 2 + 5
   result = resf(2); // result is 5 because 1 + 2 + 2
   ```

10. takes in 2 functions and returns the sum of the returned values of the 2 functions

    ```js
    fdemo1 = () => {
      return 5;
    };
    fdemo2 = () => {
      return 6;
    };
    result = solution(fdemo1, fdemo2); // result is 11 because fdemo1() + fdemo2()
    ```
