# Blinker

## Goal

Create a UI with a blinking text display with controls for both text and speed.

- When the page is loaded, default blinking text should be displayed

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:text`
   - `input:number`
   - `h1`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `text`: mutable, string of characters that will blink, default "Blink"
     - `bps`: mutable, number of blinks per second, default 1
     - `textInput`: immutable, the `input:text` element
     - `bpsInput`: immutable, the `input:number` element
     - `h1`: the `h1` element where the blinking text will be displayed

   - Create the following function:

     - `blink`

       - Goal: create a function that causes the `textContent` of `h1`
       - Signature: no parameters, returns `undefined`, side-effect: updates UI
       - Explanation:

         - Assign `textInput.value` to `text`
         - Assign `bpsInput.value` to `bps`
         - If the `textContent` of `h1` is empty, set it to `text`, otherwise set it to `''`
         - Call `setTimeout` with:

           - Function: `blink`
           - Delay: `Math.floor(1000 / (bps * 2))`

   - Call `blink`

## [Solution](solution.html)
