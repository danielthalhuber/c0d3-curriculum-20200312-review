# Stopwatch with Start Button

## Goal

Create a stopwatch UI with a time display and a start button.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1`
   - `button` with text: Start
   - `script`

3. In the `script`:

   - Create the following helper function:

     - `padNum`

       - Goal: create a function that takes two numbers and returns the a string constructed by adding enough zeros to the first number so that the length of the string is equal to the second number.
       - Example:

         ```js
         padNum(3, 2); // returns '03'
         padNum(33, 2); // returns '32'
         ```

       - Signature:

         - Parameters:

           - `num`: public, number
           - `digits`: public, number
           - `result`: public, string

         - Returns: string

       - Explanation:
         - Start by assigning `${num}` to `result`
         - Base: if the length of `result` is greater or equal to `digits`, return results
         - Recursive: return a call to `padNum`, prepending a `'0'` to `result`

     - `formatMsTime`

       - Goal: create a function that takes a number representing time in milliseconds and returns a string in the format MM:SS:HH (where H represents hundredths of a second)
       - Example:

         ```js
         formatMsTime(123004); // returns "02:03:04"
         formatMsTime(23004); // returns  "00:23:04"
         formatMsTime(123); // returns "00:00:13"
         ```

       - Signature:

         - Parameter: `msTime`: public, number
         - Returns: string

       - Explanation:

         - Declare `mins` and assign it the value of the total number of whole minutes in `msTime`
         - Declare `secs` and assign it the value of remaining whole seconds after accounting for minutes
         - Declare `hunSecs` and assign it the value of remaining hundredths of seconds after accounting for minutes and seconds
         - Return the value `${padNum(mins, 2)}:${padNum(secs, 2)}:${padNum(hunSecs, 2)}`

   - Create the following state variables:

     - `startTime`, mutable, datetime in milliseconds (ms) when the timer starts
     - `elapsedTime`, mutable, number of ms since `startTime`
     - `h1`, immutable, HTML element to display `elapsedTime`
     - `button`, immutable, HTML element to start the timer

   - Create the following functions:

     - `updateElapsedTime`

       - Goal: create a function that updates `elapsedTime`, and then updates the displayed time in the UI
       - Example:

         ```html
         <!-- initial state -->
         <h1>00:00</h1>

         <!-- 10 seconds after calling updateElapsedTime -->
         <h1>00:10</h1>
         ```

       - Signature: no parameters, returns `undefined`, side-effects: updates state variables and UI
       - Explanation:
         - Assign the value returned by `Date.now() - startTime` to `elapsedTime`
         - Assign the value returned by `formatMsTime(elapsedTime)` to `h1`'s `textContent`

     - `startTimer`

       - Goal: create a function that starts the timer
       - Signature: no parameters, returns `undefined`, side-effects: updates a state variable, starts an interval
       - Explanation:

         - If `startTime` is truthy, return/stop
         - Assign the value `Date.now()` to `startTime`
         - Call `setInterval` with callback `updateElapsedTime` and delay 10 ms

- Add `startTimer` as a click event listener of `button`
- Assign the value returned by `formatMsTime(elapsedTime)` to `h1`'s `textContent` (will be all zeros)

## [Solution](solution.html)
