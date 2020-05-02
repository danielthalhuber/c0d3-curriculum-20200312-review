# Log Country with Most Cities (with Fetch)

## Goal

Write a function called `logCountryWithMostCities` that sends a request to https://api.openaq.org/v1/countries and logs the country with the most cities to the console.

## Examples

```js
// logs the name of the country with the most cities
logCountryWithMostCities();
```

## Signature

- Parameters: none
- Returns: Promise
- Side-effects:

  - Makes HTTP requests
  - Logs to the console

- Dependencies: `node-fetch`

## Explanation

- Send a request to the API endpoint: https://api.openaq.org/v1/countries

  - If the request if fulfilled:

    - Parse the `body` and create a JavaScript value (array)
    - Find the name of the country with the most cities
    - Log the city name to the console

  - If the request is rejected, throw an error

## [Code](index.js)

## [Test](index.test.js)
