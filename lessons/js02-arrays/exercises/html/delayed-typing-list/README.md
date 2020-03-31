# Delayed Typing List

## Goal

Create an input box, a button, and an area to display a list of text items. When the button is clicked, create a new text item that displays each key that was typed after a delay of 200ms. Repeating this process should create a new text item displaying delayed typing.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:text`
   - `button` with text: Start
   - `div`
   - `script`

3. In the `script`:

   - Create a helper function called `delayedTextContentItem`

     - Goal: Create a function that takes in a string and an id and then updates the `textContent` of the element of the given id, with the given string, one character at a time, at intervals of 200 ms.

     - Example:

       ```html
       <!-- at 0 ms -->
       <div id="target">
         <h1 id="item-0">nothing</h1>
       </div>
       <script>
         delayedTextContent('abc', target);
       </script>

       <!-- just after 200 ms -->
       <div id="target">
         <h1 id="item-1">a</h1>
         <h1 id="item-0">nothing</h1>
       </div>
       <script>
         delayedTextContent('abc', target);
       </script>

       <!-- just after 400 ms -->
       <div id="target">
         <h1 id="item-1">ab</h1>
         <h1 id="item-0">nothing</h1>
       </div>
       <script>
         delayedTextContent('abc', target);
       </script>

       <!-- just after 600 ms -->
       <div id="target">
         <h1 id="item-1">abc</h1>
         <h1 id="item-0">nothing</h1>
       </div>
       <script>
         delayedTextContent('abc', target);
       </script>
       ```

     - Signature:

       - Parameters:

         - `str`: public, string
         - `id`: public, string
         - `i`: private, number

       - Returns: `undefined`

     - Explanation:

       - Starting with `i = 0`
       - Base: if `i` is greater or equal to the length of `str`, then return/stop
       - Recursive:

         - Call `setTimeout` with the arguments:
           - Callback that:
             - Updates the `textContent` of `#id` by appending `str[i]`
             - Calls `delayedTextContentItem`, incrementing `i` by 1
         - Delay: 200

- Identify the `button`, `input`, and `div` elements
- Add a click event listener to `button` and have it:
  - Identify the id of the first `h1`
  - Declare `newId` and assign it a unique id (increment numeric component of last `h1` element's id)
  - Prepend an `h1#newId` to the `innerHTML` of `div`
  - Call `delayedTextContentItem(input.value, newId)`
  - Clear the value of `input`

## [Solution](solution.html)
