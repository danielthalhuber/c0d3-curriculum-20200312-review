# Start with a Button Called Start

## Goal

Start with a button called Start. When you click on the button the page changes to show an input box and a button (Cancel). When the Cancel button is clicked, the page goes back to its original state.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:
   - `div`
   - `script` (empty for now)
3. In the `script`:

   - Identify the `div`
   - Create a function named `showStart` that:

     - Defines a function named `showInput` that:
       - Sets the innerHTML of `div` to:
         - An `input:text`
         - A `button` with:
           - Text: Cancel
           - A click event handler that calls `showStart`
     - Sets the innerHTML of `div` to:
       - A `button` with:
         - Text: Start
         - A click event handler that calls the function `showInput`

   - Call `showStart`

## [Solution](solution.html)
