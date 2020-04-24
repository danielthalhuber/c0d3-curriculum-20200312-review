# Log Country with Most Cities

## Goal

Write a function called `logCountryWithMostCities` that sends a request to https://api.openaq.org/v1/countries and logs the country with the most cities to the console.

## Examples

```js
// logs the name of the country with the most cities
logCountryWithMostCities();
```

## Signature

- Parameters: `callback`: function to be called after operation is complete, used for testing
- Returns: `undefined`
- Side-effects:

  - Makes HTTP requests
  - Logs to the console

- Dependencies: `request`

## Explanation

- Call `request` with the following arguments:

  - URL: https://api.openaq.org/v1/countries
  - Callback:

    - Goal: parse response data and log name of country with the most cities to the console
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
      - Find the name of the country with the most cities
      - Log the city name to the console
      - Call `callback` (for testing)

## [Code](index.js)

## [Test](index.test.js)
