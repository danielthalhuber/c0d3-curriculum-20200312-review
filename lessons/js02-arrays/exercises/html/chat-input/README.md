# Chat Input

## Goal

Create a UI for chat input.

- The user should be able to type a message into an input
- When the user clicks the Start button, the message is displayed below the input
- Subsequent messages are displayed below existing messages

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `input:text`
   - `button` with text: Save
   - `div.msgLog`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `msgInput`: immutable, HTML element representing the message input
     - `saveButon`: immutable, HTML element representing the save button
     - `msgLog`: immutable, HTML element representing the message log

   - Create the following function:

     - `addMsg`

       - Goal: create a function that reads the message from the input and appends the message to the log
       - Signature:

         - Parameter: none
         - Returns `undefined`
         - Side-effect: updates UI

       - Explanation:

         - Declare `newMsg` and assign it the value of `msgInput.value`
         - If `newMsg` is empty, stop/return
         - Append a `p` with content `newMsg` to the `innerHTML` of `msgLog`
         - Set the value of `newMsg` to `''`

   - Assign `addMsg` as a click event listener for `button`

## [Solution](solution.html)
