# House of Primes

## Goal

Create an input box and a button. When the user types in a number and hits Submit, all the prime numbers from 2 to the input number should show up in, each in its own `h1` element.

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

- Create a helper function called `listPrimesH1`

  - Goal: create a function that takes in a number and returns a string of primes from 2 to that number, each in its own `h1` element

  - Example:

    ```js
    listPrimes(2); // returns "<h1>2</h1>"
    listPrimes(4); // returns "<h1>2</h1><h1>3</h1>"
    listPrimes(8); // returns "<h1>2</h1><h1>3</h1><h1>5</h1><h1>7</h1>"
    listPrimes(13); // returns "<h1>2</h1><h1>3</h1><h1>5</h1><h1>7</h1><h1>11</h1><h1>13</h1>"
    ```

  - Signature:

    - Parameters:

      - `num`: public, number
      - `i`: private, number
      - `result`: private, string

    - Returns: string

  - Explanation:

    - Starting with `i = 2`
    - Base: if `i` is greater than `num`, then return `result`
    - Recursive:

      - Declare `currPrime` and assign it the value `<h1>${i}</h1>` if `prime` is true, and `''` otherwise
      - Return a call to `listPrimesH1`, changing the following parameters:
        - `result`: `result + currPrime`
        - `i`: `i + 1`

- Identify the `button`, `input`, and `div` elements
- Add a click event listener to `button` and have it:

  - Set the `innerHTML` of `div` to the value returned by calling `listPrimesH1` with the value of `input`

## [Solution](solution.html)
