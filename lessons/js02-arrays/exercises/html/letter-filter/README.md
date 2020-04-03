# Letter Filter

## Goal

Create a UI that allows the user to filter out a letter from a string

- The user should be presented with:

  - Greeting/instructions
  - Input for the letter to be filtered
  - Start button

- When the user clicks the Start button:

  - The greeting should change to indicate the letter being filtered out
  - The start button should be replaced with two buttons:

    - Filter: when clicked, displays text from the input, with the specified letter filtered out
    - Go Back: when clicked, returns to the initial/greeting/start UI

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1`
   - `div.form` containing:
   - `h2`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `header`: immutable, HTML element representing the header
     - `form`: immutable, HTML element containing the UI inputs and buttons
     - `filteredResult`: immutable, HTML element representing the area where filtered results will be displayed

   - Create the following function:

     - `filterText`

       - Goal: create a function that accepts a string of characters to filter and a string character to filter out of the string, and then returns the first string without the character from the second string

       - Signature:

       - Parameters:

         - `str`: public, string
         - `char`: public, string
         - `i`: private, number
         - `result`: private, string

       - Returns: string

       - Explanation

         - Start with `i = 0` and `result = ''`
         - Base: if `i >= str.length`, then stop/return
         - Recursive:
           - Declare `filteredChar` assign it the value of `str[i]` if `str[i]` is not equal to `char[0]`, and `''` otherwise
           - Return a call to `filterText`, incrementing `i` and appending `filteredChar` to `result`

     - `renderFilterView`

       - Goal:

         - Create a function that renders the filter screen, displaying the letter to be filtered out, a text input, a filter button, and a back button
         - The filter button should display the filtered results when clicked
         - The back button should render the start screen when clicked

       - Signature:

         - Parameters:

           - `renderStart`: function that render the start view
           - `filterChar`: string representing letter to be filtered out

         - Returns: `undefined`
         - Side-effect: updates UI

       - Explanation:

         - Set the `textContent` of `header` to a message that indicates which letter is being filtered
         - Set the `innerHTML` of `form` to a text input, a filter button, and a back button
         - Add a click event listener to the filter button that:

           - Reads the text value of the `input` and passes it, along with `filterChar` to a call of `filterText`
           - Sets the `textContent` of `filterResult` to the value returned by `filterChar`
           - Sets the `value` of the `input` to `''`

         - Add the click event listener `renderStart` to the back button

     - `renderStartView`

       - Goal:

       - Create a function that renders the start screen, displaying instructions, a text input form, and a start button
       - The button should open the filter view when clicked

       - Signature: no parameters, returns `undefined`, side-effect: updates the UI
       - Explanation:

         - Assign `'Type a letter, then click start'` to the `textConten` of `header`
         - Set the `innerHTML` of `form` to be a text input and a button
         - Clear the `textContent` of `filteredResult`
         - Add the click event handler `renderFilterView` to the button

   - Initialize the UI by calling `renderStartView`

## [Solution](solution.html)
