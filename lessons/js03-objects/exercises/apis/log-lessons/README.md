# Log Lessons

## Goal

Write a function called `logLessons` that sends a request to https://c0d3.com/api/lessons and then logs all of the titles to the console.

## Examples

```js
/*
  Logs:

  Foundations of JavaScript
  Variables & Functions
  Arrays
  Objects
  Front End Engineering
  End To End
  React, GraphQL, SocketIO
  JavaScript Algorithms
  Trees
  General Algorithms
*/
logLessons();
```

## Signature

- Parameters: `callback`: function to be called when lessons have been logged, used for testing
- Returns: `undefined`
- Side-effects:

  - Makes HTTP requests
  - Logs to the console

- Dependencies: `request`

## Explanation

- Call `request` with the following arguments:

  - URL: https://c0d3.com/api/lessons
  - Callback:

    - Goal: parse response data and log lesson properties to console
    - Signature:

      - Parameters:

        - `error`: error object or string?
        - `response`: object containing response
        - `body`: text of response body

      - Returns: `undefined`
      - Side-effects:

        - Makes HTTP requests
        - Logs to the console

    - Explanation:

      - If `error` is truthy, log it to the console and exit
      - Otherwise, parse `body` and create a JavaScript value (array)
      - For each lesson in the array, log its title to the console
      - Call `callback` (for testing)

## [Code](index.js)

## [Test](index.test.js)
