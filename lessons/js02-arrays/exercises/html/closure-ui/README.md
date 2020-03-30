# Build a Closure UI

## Goal

Create a UI for a closure.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:number`
   - `div.buttons`
   - `h1`
   - `script`

3. In the `script`:

   - Identify `buttonsDiv`, `input`, and `h1`
   - Create a function named `startClosure` and have it:

     - Create a function named `showClosure` and have it:

       - Accept a `num` parameter
       - Clear the value of `input`
       - Set the text of `h1` to `${num} +`
       - Set the `innerHTML` of `buttonsDiv` to:

         - `button.add` with text Add
         - `button.reset` with text Reset

       - Add a click event handler to `button.add` and have it:

         - Set the value of `h1` to `${num} + ${input.value} = ${num + input.value}`
         - Clear the value of `input`

       - Add a click event handler to `button.reset` that calls `startClosure`

     - Set the `innerHTML` of `buttonsDiv` to a `button` with text Start
     - Add a click event handler to the `button` and have it call `showClosure`, passing it the value of `input` as an argument

- Call `showStart`

## [Solution](solution.html)
