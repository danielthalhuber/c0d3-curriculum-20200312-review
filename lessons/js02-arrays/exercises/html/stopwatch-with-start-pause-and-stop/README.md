# Stopwatch with Start, Pause, and Stop Buttons

## Goal

Create a stopwatch UI with a time display and start, pause, and stop buttons.

- When the start button is clicked:

  - If the timer is not paused:

    - The timer become enabled
    - The elapsed time will reset
    - The UI will update every 10 ms

  - If the timer is paused, nothing will happen

- When the pause button is clicked:

  - If the timer is not paused:

    - The timer will become paused
    - The UI will no longer be updated
    - The pause button text will change from Pause to Un-pause

  - If the timer is paused:

    - The timer will become un-paused
    - The UI will update every 10 ms if the timer is enabled
    - The button text will change from Un-pause to Pause

- When the stop button is clicked: the timer is disabled

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1`
   - `button.start` with text: Start
   - `button.pause` with text: Pause
   - `button.stop` with text: Stop
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

     - `enabled`: mutable, boolean indicating whether the timer is active (started) or not
     - `paused`: mutable, boolean indicating whether the timer is paused or not
     - `intervalStartTime`, mutable, datetime in ms when recording interval starts
     - `intervalEndTime`, mutable, datetime in ms when recording interval ends
     - `elapsedTime`, mutable, total number of ms recorded
     - `h1`, immutable, HTML element to display `elapsedTime`
     - `startButton`, immutable, HTML element to start the timer
     - `pauseButton`, immutable, HTML element to pause/un-pause the timer
     - `stopButton`, immutable, HTML element to stop the timer

   - Create the following functions:

     - `restartInterval`

       - Goal: create a function that restarts the recording interval
       - Signature: no parameters, returns `undefined`, side-effect: updates state variable
       - Explanation: set `intervalEndTime` to the current time in ms

     - `recordInterval`

       - Goal: create a function that records the time in ms that has elapsed in the current interval
       - Signature: no parameters, returns `undefined`, side-effect: updates state variables
       - Explanation:
         - Set the interval start time to the end time + 1
         - Set the interval end time to the current time
         - Increment elapsed time by the difference between end and start times

     - `updateElapsedTime`

       - Goal: create a function that updates `elapsedTime`, and then updates the displayed time in the UI
       - Example:

         ```html
         <!-- initial state -->
         <h1>00:00</h1>

         <!-- 10 seconds after calling updateElapsedTime -->
         <h1>00:10</h1>
         ```

       - Signature:
         - Parameter: `restart`, public, boolean, indicates that the interval should be restarted
         - Returns `undefined`
         - Side-effects: updates state variables and UI
       - Explanation:

         - If `paused` is `true` or `enabled` is `false`, return/stop
         - If `restart` is `true`, reset the interval
         - Add the value `Date.now() - startTime` to `elapsedTime`
         - Assign the value returned by `formatMsTime(elapsedTime)` to `h1`'s `textContent`
         - Call `setTimeout(() => updateElapsedTime(false), 10)`

     - `startTimer`

       - Goal: create a function that starts the timer
       - Signature: no parameters, returns `undefined`, side-effects: updates a state variable, calls a function
       - Explanation:

         - If `paused` is `true`, return/stop
         - Otherwise, reset `elapsedTime` to 0
         - If the timer is `enabled`, since it's not `paused`, there's already a timeout running, so just exit/return
         - Otherwise, the timer needs to be started:
           - Assign `true` to `enabled`
           - Call `updateElapsedTime()`

     - `stopTimer`

       - Goal: create a function that stops the timer
       - Signature: no parameters, returns `undefined`, side-effect: updates a state variable
       - Explanation: set `enabled` to `false`

     - `pauseTimer`

       - Goal: create a function that pauses the timer
       - Signature: no parameters, returns `undefined`, side-effects: updates a state variable, changes UI button text
       - Explanation:
         - Set `paused` to `!paused`
         - Set the `textContent` of `button.pause` to `'Un-pause'` if `paused` is `true`, and `'Pause'` otherwise
         - If `paused` is `true` return/stop
         - Call `updateElapsedTime()`

- Add `startTimer` as a click event listener of `button.start`
- Add `stopTimer` as a click event listener of `button.stop`
- Add `pauseTimer` as a click event listener of `button.pause`
- Assign the value returned by `formatMsTime(elapsedTime)` to `h1`'s `textContent` (will be all zeros)

## [Solution](solution.html)
