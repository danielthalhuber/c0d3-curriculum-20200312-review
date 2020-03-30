# Hello String Generator UI

## Goal

Create a page with an input box and a button. The input box takes a number, and when the button is clicked, `Hello` repeated that many times is displayed inside an `<h1>` element.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:number`
   - `button` with text: Generate
   - `h1`
   - `script`

3. In the `script`:

   - Create a helper function called `repeat`

     - Goal: create a function that returns a string composed of a given string repeated a specified number of time

     - Example: `repeat('a', 3)` returns `'aaa'`

     - Signature:

       - Parameters:

         - `str`: public, string
         - `num`: public, number
         - `i`: private, number
         - `result`: private, string

       - Returns: string

     - Process:

       - Start with `i = 1` and `result = ''`
       - Base: if `i` is greater than `num`, then return `result`
       - Recursive: return a call to `reverse` with the following changes:

         - Pass `i + 1` as the `i` argument
         - Pass `result + str` as the `result` argument

   - Identify the `button`, `input`, and `h1` elements
   - Add a click event listener to `button` and have it:
     - Set the text of `h1` to the value returned by calling `reverse` with the string `'Hello'` and the number represented by the value of `input`

## [Solution](solution.html)
