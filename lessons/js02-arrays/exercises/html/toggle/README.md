# Toggle

## Goal

Create a UI that displays a button that when clicked displays the text "HELLO WORLD" if it is not already displayed, and removes the text otherwise.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `button`, with text: `'Toggle'`
   - `h1`
   - `script`

3. In the `script`:

   - Create the following state variables:

   - `button`: immutable, HTML element representing the button
   - `msgDisplay`: immutable, HTML element representing the message
   - `message`: immutable, string containing the message "HELLO WORLD"

   - Create the following function:

     - `toggle`

       - Goal: create a function that causes `message` to be displayed if it is not already, and hides it otherwise
       - Signature: no parameters, returns `undefined`, side-effects: updates state variable and UI
       - Explanation:

         - Set the `textContent` of `msgDisplay` to `message` if the `textContent` is empty, and `''` otherwise

   - Add the click event handler `toggle` to `button`

## [Solution](solution.html)
