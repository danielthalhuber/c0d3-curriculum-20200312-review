# Countdown from Input

## Goal

Create a UI for a countdown clock.

- The user should be able to input a number of seconds for the countdown
- When the user clicks the Start button, the number of remaining seconds should be displayed and update every second

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1` with content: Countdown
   - `input:number`
   - `h1.display`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `timeoutId`: mutable, number representing the timeout id of the timer
     - `input`, immutable, HTML element where the user inputs the countdown seconds
     - `startButton`: immutable, HTML element representing the start button
     - `display`: immutable, `h1.display` element where countdown will be displayed

   - Create the following function:

     - `countdown`

       - Goal: create a function that accepts a number, and then displays the numbers from that number down to zero, in succession, once every second
       - Signature:

         - Parameter: `num`: public, number representing the number to display
         - Returns `undefined`
         - Side-effect: updates UI

       - Explanation:

         - Base: if `num < 0` stop/return
         - Recursive:

           - Set the `textContent` of `display` to `num`
           - Call `setTimeout` with the following parameters, assigning the return value to `timeoutId`

             - Callback: `() => countdown(num - 1)`
             - Delay: 1000

   - `startCountdown`

     - Goal: create a function that stops any existing timeouts, reads the countdown number from the UI, and then calls `countdown`, passing it the number
     - Signature: no parameters, returns `undefined`, side-effects: stops timeouts, calls `countdown`
     - Explanation:

       - Clear any existing timeout with id `timeoutId`
       - Call `countdown`, passing it the value of `+input.value`

   - Assign `startCountdown` as a click event listener for `button`

## [Solution](solution.html)
