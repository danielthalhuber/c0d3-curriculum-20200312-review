# House of Primes

## Goal

Create an input box and a button. When the user types in a number and hits Submit, all the prime numbers from 2 to the input number should show up.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:number`
   - `button` with text: Start
   - `div`
   - `script`

3. In the `script`:

   - Create a helper function called `isPrime`

     - Goal: create a function that takes in a number and returns true if it's prime, false otherwise.

     - Example:

       ```js
       isPrime(2); // returns true
       isPrime(1); // returns false
       isPrime(8); // returns false
       isPrime(13); // returns true
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

         - Return `true` if `i` is greater than or equal to the square root of `num`
         - Otherwise, return a call to `isPrime`, incrementing `i` by 1

- Create a helper function called `listPrimes`

  - Goal: create a function that takes in a number and returns a string of primes from 2 to that number, delimited by a comma-space

  - Example:

    ```js
    listPrimes(2); // returns "2"
    listPrimes(4); // returns "2, 3"
    listPrimes(8); // returns "2, 3, 5, 7"
    listPrimes(13); // returns "2, 3, 5, 7, 11, 13"
    ```

  - Signature:

    - Parameters:

      - `num`: public, number
      - `i`: private, number
      - `result`: private, string

    - Returns: boolean

  - Explanation:

    - Starting with `i = 2`
    - Base: if `i` is greater than `num`, then return `result`
    - Recursive:

      - Declare `prime` and assign it the value returned by `isPrime(i)`
      - Declare `delimiter` and assign it the value `', '` if `prime` is `true` and `result` is not `''`, and `''` otherwise
      - Declare `currPrime` and assign it the value `i` if `prime` is true, and `''` otherwise
      - Return a call to `listPrimes`, changing the following parameters:
        - `result`: `result + delimiter + currPrime`
        - `i`: `i + 1`

- Identify the `button`, `input`, and `div` elements
- Add a click event listener to `button` and have it:

  - Set the `textContent` of `div` to the value returned by calling `listPrimes` with the value of `input`

## [Solution](solution.html)
