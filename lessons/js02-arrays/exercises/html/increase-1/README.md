# Increase 1

## Goal

Create a UI that displays a button and the number 0. When the button is clicked, the number is incremented by 1.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `button`, with text: `'Add 1'`
   - `h1`
   - `script`

3. In the `script`:

   - Create the following state variables:

   - `button`: immutable, HTML element representing the button
   - `numDisplay`: immutable, HTML element representing the number to be incremented
   - `num`: mutable, number to be incremented

   - Create the following function:

     - `increment`

       - Goal: create a function that increments `num` and updates `numDisplay` with the new value of `num`
       - Signature: no parameters, returns `undefined`, side-effects: updates state variable and UI
       - Explanation:

         - Increment the value of `num`
         - Set the `textContent` of `numDisplay` to `num`

   - Add the click event handler `increment` to `button`
   - Set the `textContent` of `numDisplay` to `num`

## [Solution](solution.html)
