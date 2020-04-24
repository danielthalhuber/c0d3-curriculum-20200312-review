# Log Heaviest Pokemon

## Goal

Write a function called `logHeaviestPokemon` that sends a request to https://pokeapi.co/api/v2/pokemon/ and logs the country with the most cities to the console.

## Examples

```js
// logs the name of the heaviest pokemon
logHeaviestPokemon();
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

  - URL: https://pokeapi.co/api/v2/pokemon/
  - Callback:

    - Goal: parse response data and log the name of the heaviest Pokemon
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
      - Otherwise, parse `body` and create a JavaScript value (array) of Pokemon
      - For each Pokemon, make another request to get its details
      - Find the name of heaviest Pokemon
      - Log the name to the console
      - Call `callback` (for testing)

## [Code](index.js)

## [Test](index.test.js)
