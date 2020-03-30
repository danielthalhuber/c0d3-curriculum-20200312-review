# String Breaker

## Goal

Break each character of the input string into its own `<h1>` element. For example, breaking `'Batman'` will generate:

```html
<h1>B</h1>
<h1>a</h1>
<h1>t</h1>
<h1>m</h1>
<h1>a</h1>
<h1>n</h1>
```

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:string`
   - `button` with text: Generate
   - `div`
   - `script`

3. In the `script`:

   - Create a helper function called `wrapChars`

     - Goal: create a function that returns a string composed of the characters of a given string, where each character is wrapped by specified left and right strings

     - Example: `wrapChars('abc', '[', ']')` returns `'[a][b][c]'`

     - Signature:

       - Parameters:

         - `str`: public, string
         - `left`: public, string
         - `right`: public, string
         - `i`: private, number
         - `result`: private, string

       - Returns: string

     - Process:

       - Start with `i = 0` and `result = ''`
       - Base: if `i` is greater than the length of `str`, then return `result`
       - Recursive: return a call to `wrapChars` with the following changes:

         - Pass `i + 1` as the `i` argument
         - Pass `result + left + str + right` as the `result` argument

   - Identify the `button`, `input`, and `div` elements
   - Add a click event listener to `button` and have it:
     - Set the `innerHTML` of `div` to the value returned by calling `wrapChars`, changing the arguments:
       - `str`: the value of `input`
       - `left`: `'<h1>'`
       - `right`: `'</h1>'`

## [Solution](solution.html)
