# JS0 - Foundations: Challenges

Use arrow functions for the following challenges.

1. Sum of 2 Numbers

   - Goal: write a function called solution that takes in 2 numbers and return the sum of the 2 input parameters
   - Examples:

     ```js
     solution(5, 9); // Should return 14
     solution(4, 1); // Should return 5
     ```

   - Signature:

     - Parameters:

       - `num1`: public, number
       - `num2`: public, number

     - Returns: number

   - Explanation: return the sum of the two given numbers
   - [Code](01.js)
   - [Test](01.test.js)

2. Sum of 3 Numbers

   - Goal: write a function called solution that takes in 3 numbers and returns the sum of the 3 input parameters
   - Examples:

     ```js
     solution(5, 9, 2); // Should return 16
     solution(4, 1, 9); // Should return 14
     ```

   - Signature:

     - Parameters:

       - `num1`: public, number
       - `num2`: public, number
       - `num3`: public, number

     - Returns: number

   - Explanation: return the sum of the three given numbers
   - [Code](02.js)
   - [Test](02.test.js)

3. Greater than 5

   - Goal: write a function called solution that takes in a number and returns true if the input number is greater than 5. Otherwise returns false
   - Examples:

     ```js
     solution(9); // Should return true
     solution(4); // Should return false
     ```

   - Signature:

     - Parameters:
       - `num`: public, number
     - Returns: number

   - Explanation: return the Boolean expression `num > 5`
   - [Code](03.js)
   - [Test](03.test.js)

4. Biggest Number Out of 2

   - Goal: write a function called solution that takes in 2 numbers and returns the larger number.
   - Examples:

     ```js
     solution(5, 9); // Should return 9
     solution(4, 1); // Should return 4
     ```

   - Signature:

     - Parameters:
       - `num1`: public, number
       - `num2`: public, number
     - Returns: number

   - Explanation: return `num1` if it's larger, otherwise return `num2`
   - [Code](04.js)
   - [Test](04.test.js)

5. Biggest Number Out of 3

   - Goal: write a function called solution that takes in 3 numbers and return the largest number.
   - Examples:

     ```js
     solution(5, 9, 14); // Should return 14
     solution(4, 5, 1); // Should return 5
     ```

   - Signature:

     - Parameters:
       - `num1`: public, number
       - `num2`: public, number
       - `num3`: public, number
     - Returns: number

   - Explanation:

     - Declare a function `max` that takes two numbers and returns the largest
     - Return `num1` if it's larger than `num2` and `num3`, otherwise
     - Return `num2` if it's larger than `num3`, otherwise
     - Return `num3`

   - [Code](05.js)
   - [Test](05.test.js)

6. Is First Number Bigger?

   - Goal: write a function called solution that takes in 2 numbers and returns true if the first input parameter is greater than the second. Otherwise returns false
   - Examples:

     ```js
     solution(5, 9); // Should return false
     solution(4, 1); // Should return true
     ```

   - Signature:

     - Parameters:
       - `num1`: public, number
       - `num2`: public, number
     - Returns: boolean

   - Explanation: return the boolean expression `num1 > num2`
   - [Code](06.js)
   - [Test](06.test.js)

7. Is Sum > 10?

   - Goal: write a function called solution that takes in 2 numbers and returns true if the sum of the 2 numbers is greater than 10. Otherwise returns false
   - Examples:

     ```js
     solution(5, 9); // Should return true
     solution(4, 1); // Should return false
     ```

   - Signature:

     - Parameters:
       - `num1`: public, number
       - `num2`: public, number
     - Returns: boolean

   - Explanation: return the boolean expression `num1 + num2 > 10`
   - [Code](07.js)
   - [Test](07.test.js)

8. Functional Sum:

   - Goal: write a function called solution that takes in 2 numbers and returns a function. When the returned function is called, return the sum of the 2 input parameters.
   - Examples:

     ```js
     resf = solution(5, 6); // a is a function
     result = resf(); // result is 11
     ```

   - Signature:

     - Parameters:
       - `num1`: public, number
       - `num2`: public, number
     - Returns: number

   - Explanation: return a function that returns the expression `num1 + num2` when called
   - [Code](08.js)
   - [Test](08.test.js)

9. Functional 3 Sum

   - Goal: write a function called solution that takes in 2 numbers and returns a function. The returned function takes in a number and will return the sum of all 3 numbers when called

   - Examples:

     ```js
     resf = solution(1, 2); // a is a function
     result = resf(1); // result is 4 because 1+2+1
     result = resf(5); // result is 8 because 1 + 2 + 5
     result = resf(2); // result is 5 because 1 + 2 + 2
     ```

   - Signature:

     - Parameters:
       - `num1`: public, number
       - `num2`: public, number
     - Returns:
       - Function with signature:
         - Parameter: `num3`: public, number
         - Returns: number

   - Explanation: return a function which accepts a parameter `num3`, and returns a new function that returns the expression `num1 + num2 + num3`
   - [Code](09.js)
   - [Test](09.test.js)

10. Functional Sums

    - Goal: write a function called solution that takes in 2 functions and returns the sum of the returned values of the 2 functions
    - Examples:

      ```js
      fdemo1 = () => {
        return 5;
      };
      fdemo2 = () => {
        return 6;
      };
      result = solution(fdemo1, fdemo2); // result is 11 because fdemo1() + fdemo2()
      ```

    - Signature:

      - Parameters:
        - `func1`: public, function
        - `func2`: public, function
      - Returns: undetermined

    - Explanation: return the value of the expression `func1() + func2()`
    - [Code](10.js)
    - [Test](10.test.js)
