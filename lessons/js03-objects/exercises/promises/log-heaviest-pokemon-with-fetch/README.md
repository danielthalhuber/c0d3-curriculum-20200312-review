# Log Heaviest Pokemon (with Fetch)

## Goal

Write a function called `logHeaviestPokemon` that sends a request to https://pokeapi.co/api/v2/pokemon/ and logs the country with the most cities to the console.

## Examples

```js
// logs the name of the heaviest pokemon
logHeaviestPokemon();
```

## Signature

- Parameters: none
- Returns: Promise
- Side-effects:

  - Makes HTTP requests
  - Logs to the console

- Dependencies: `node-fetch`

## Explanation

- Request data from the API endpoint: https://pokeapi.co/api/v2/pokemon/

  - If the request if fulfilled:

    - Otherwise, parse `body` and create a JavaScript value (array) of Pokemon
    - For each Pokemon, make another request to get its details
    - Find the name of heaviest Pokemon
    - Log the name to the console

  - If the request is rejected, throw an error

## [Code](index.js)

## [Test](index.test.js)
