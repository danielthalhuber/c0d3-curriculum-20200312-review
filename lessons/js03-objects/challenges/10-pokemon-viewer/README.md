# Pokemon Viewer

## Goal

Create an HTML file that displays the names and images of Pokemon.

- 20 Pokemon should be displayed at any given time
- A pager with Previous and Next buttons should be available at the top of the page
- If there are more Pokemon to display, clicking on the Next button will replace the existing 20 with the next set of Pokemon
- If there are previous Pokemon to display, clicking on the Previous button will replace the existing 20 with the previous set of Pokemon

## [Demo](demo.html)

## Process

- Create an HTML document
- Add the following elements to the `body`:

  - `div.pager`: element for pager controls containing the following children:

    - `button.prev`: button with text Previous (initially disabled)
    - `button.next`: button with text Next (initially disabled)

  - `div.display`: element to display Pokemon

- Add a `script`:

  - Create the following state:

    - `buttonPrev`: the `button.prev` element
    - `buttonNext`: the `button.next` element
    - `display`: the `div.display` element
    - `apiNext`: mutable, string containing endpoint for the next set of Pokemon
    - `apiPrev`: mutable, string containing endpoint for the next set of Pokemon

  - Define the following functions:

    - `getPokemonHTML`:

      - Goal: request Pokemon details, and if request is fulfilled, return a string of HTML containing the Pokemon name and image, otherwise throw an error

      - Signature:

        - Parameters: `url`: string containing API endpoint for Pokemon detail
        - Returns: Promise with string value containing HTML for specified Pokemon
        - Side-effects: makes network requests

      - Explanation:

        - Request details from the given `url`

          - If request is fulfilled, return HTML string containing an `h1` with the Pokemon's name and an `img` to display the Pokemon's image
          - Otherwise, throw an error

    - `render`:

      - Goal: display the current set of Pokemon and update the buttons as necessary

      - Signature:

        - Parameters: `apiEndpoint`, endpoint for list of Pokemon to display
        - Returns: Promise
        - Side-effects:

          - Makes network requests
          - Updates DOM

      - Explanation:

        - Request the current set of Pokemon from `apiCurr`

          - If the request is rejected, log the error
          - Otherwise:

            - Update `apiPrev` and `apiNext`
            - If `apiPrev` is `null`, set disable `buttonPrev`
            - If `apiNext` is `null`, set disable `buttonNext`
            - Create a string `pokemonHTML` to contain the Pokemon HTML
            - For each Pokemon in the set:

              - Call `getPokemonHTML` and append the results to `pokemonHTML`

            - Replace the `innerHTML` of `display` with `pokemonHTML`

  - Add event listeners to `buttonPrev` and `buttonNext` that call `render` with the appropriate API `url` if the button is not disabled
  - Initialize the application by calling `updateUI` with `apiNext`

## [Code](index.html)
