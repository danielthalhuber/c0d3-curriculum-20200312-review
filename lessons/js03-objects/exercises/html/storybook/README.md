# Storybook

## Goal

Create a UI for a simple storybook application.

The user should be able to:

- View one page of the book at a time
- Flip pages forward and backward in the viewer using Next and Previous buttons
- Add a new page of text with an input (textarea) and submit button
- View all pages in a list
- Delete a page by clicking on it in the list
- View the same book across browser sessions (book data should be persistent)

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1` with text: Storybook
   - `div.viewer` with the following children:

     - `h2` with text viewer
     - `div.controls`: with childen:
       - `button.prev`: button with text: Previous Page
       - `button.next`: button with text: Next Page
     - `div.page-viewer`

   - `hr`
   - `div.editor` with the following children:

     - `h2` with text: Editor
     - `h3` with text: Add New Page
     - `textarea` with placeholder text: Type new page text here...
     - `button` with text: Add
     - `h2` with text: Pages
     - `div`

   - `script`

3. In the `script`:

   - Create the following state variables:

     - `pages`: mutable, an array of pages
     - `currentPage`: mutable number index of current page in `pages`
     - `prevButton`: immutable, the `button.prev`
     - `nextButton`: immutable, the `button.next`
     - `pageView`: immutable, the `div.viewer > div`
     - `pageInput`: immutable, the `div.editor > textarea` element
     - `addButton`: immutable, the `div.editor > button` element
     - `pageEditList`: immutable, the `div.editor > div` element

   - Create the following function:

     - `paragraphize`

       - Goal: convert the given text into paragraphs
       - Signature:

         - Parameters:

           - `text`: the text to be converted

         - Returns: string

       - Explanation: return a new string with the following changes:

         - Prepend and append `'<p>'`
         - Replace newline characters with `'</p><p>'`

     - `savePageState`

       - Goal: save (add or update) `pages` and `currentPage` to `localStorage`
       - Signature: no parameters, returns `undefined`, side-effects: updates `localStorage`
       - Explanation:

         - Call `localStorage.setItem` passing it a key of `'pages'` and the value of `JSON.stringify(pages)`
         - Call `localStorage.setItem` passing it a key of `'currentPage'` and the value of `JSON.stringify(currentPage)`

     - `loadPageState`

       - Goal: replace `pages` and `currentPage` in state with the values from `localStorage`
       - Signature: no parameters, returns `undefined`, side-effect: updates state
       - Explanation:

         - Call `localStorage.getItem`, passing it the key `'pages'`
         - Parse the resulting string to construct a JavaScript value
         - If the resulting value is `null`, assign an array of dummy strings to `pages`
         - Otherwise assign the resulting value to `pages`
         - Call `localStorage.getItem`, passing it the key `'currentPage'`
         - Parse the resulting string to construct a JavaScript value
         - If the resulting value is `null`, assign 0 to `currentPage`
         - Otherwise assign the resulting value to `currentPage`

     - `addPage`

       - Goal: add user defined page item to state
       - Signature: no parameters, returns `undefined`, side-effect: updates UI and state
       - Explanation:

         - Get the text from `pageInput`
         - Append the text to `pages`
         - Call `savePageState`
         - Clear the text from `pageInput`

     - `deletePage`

       - Goal: remove the specified todo item from state
       - Signature:

         - Parameters: `index`: number representing the index of the page in `pages`
         - Returns: `undefined`

       - Explanation:

         - Splice the specified element out of `pages`
         - Call `savePageState`

   - `renderPageView`

     - Goal: render the current page in the viewer
     - Signature: parameters: none, returns: `undefined`, side-effects: updates UI
     - Set the `innerHTML` of `pageView` to `pages[currentPage]`

   - `renderPageEditList`

     - Goal: render the todo item in the UI
     - Signature:

       - Parameters: none
       - Returns `undefined`
       - Side-effect: updates UI

     - Explanation:

       - Create a string of `div` elements from `pages` to represent the pages in `pageEditList`
       - Set the `innerHTML` of `pageEditList` to this string of string of `div` elements
       - Iterate over the `div` children of `pageEditList` and add a click event listener that calls `deletePage` with the index of the `div` element, and then calls `renderPageEditList`

   - Add a click event listener to `addButton` that calls `addPage` and then calls `renderPageEditList`
   - Add a click event to `prevButton` that decrements `currentPage` and calls `savePageState` and then `renderPageView`
   - Add a click event to `nextButton` that increments `currentPage` and calls `savePageState` and then `renderPageView`
   - Call `loadPageState`
   - Call `renderPageEditList`

## [Code](index.html)
