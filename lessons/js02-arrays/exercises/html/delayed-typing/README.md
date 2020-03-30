# Delayed Typing

## Goal

Create an input box and a button. When the button is clicked, display each key that was typed after a delay of 200ms. Repeating this process should overwrite any existing, displayed text.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:text`
   - `button` with text: Start
   - `div`
   - `script`

3. In the `script`:

   - Create a helper function called `delayedTextContent`

     - Goal: create a function that takes in a string and an element, and then updates the textContent of the given element with the given string, one character at a time, at intervals of 200 ms.

     - Example:

       ```html
       <!-- at 0 ms -->
       <p id="target"></p>
       <script>
         delayedTextContent('abc', target);
       </script>

       <!-- just after 200 ms -->
       <p id="target">a</p>
       <script>
         delayedTextContent('abc', target);
       </script>

       <!-- just after 400 ms -->
       <p id="target">ab</p>
       <script>
         delayedTextContent('abc', target);
       </script>

       <!-- just after 600 ms -->
       <p id="target">abc</p>
       <script>
         delayedTextContent('abc', target);
       </script>
       ```

     - Signature:

       - Parameters:

         - `str`: public, string
         - `el`: public, HTML element
         - `i`: private, number

       - Returns: undefined

     - Explanation:

       - Starting with `i = 0`
       - Base: if `i` is greater or equal to the length of `str` or `el` is falsey, then return/stop
       - Recursive:

         - Call `setTimeout` with the arguments:
           - Callback that:
             - Updates the `textContent` of `el` by appending `str[i]`
             - Calls `delayedTextContent`, incrementing `i` by 1
         - Delay: 200

- Identify the `button`, `input`, and `div` elements
- Add a click event listener to `button` and have it:
  - Set the `innerHTML` of `div` to a single `h1`
  - Call `delayedTextContent(input.value, div.querySelector('h1'))`
  - Clear the value of `input`

## [Solution](solution.html)
