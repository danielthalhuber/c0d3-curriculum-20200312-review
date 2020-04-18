# Friend Age Notebook Part 3

## Goal

Create a UI for keeping track of friends names and ages.

The user should be able to:

- Add a new friend's name and age using input fields and a button
- View a list of friend's names
- Click on a friend's name in the list to display the friend's age
- View the friend list across browser sessions (data should persist)

**Part 3**: use an object for the friends data structure

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1` with text: Friend List
   - `label` with:

     - Text: Name
     - Child: `input.new-name:text`

   - `label` with:

     - Text: Age
     - Child: `input.new-age:text`

   - `button` with text: Add
   - `div`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `friends`: mutable, array of friends
     - `newName`: immutable, the element `.new-name`
     - `newAge`: immutable, the element `.new-age`
     - `addButton`: immutable, the element `button`
     - `friendList`: immutable, the element `div`

   - Create the following function:

     - `saveState`

       - Goal: save or update the `friends` state to `localStorage`
       - Signature: parameters: none, returns `undefined`, side-effect: updates `localStorage`
       - Explanation: call `localStorage.setItem`, passing it the key `'friends'` and the value returned by calling `JSON.stringify` on `friends`

     - `loadState`

       - Goal: load `friends` from `localStorage` and update `friends` state
       - Signature: parameters: none, returns: `undefined`, side-effects: updates `state`
       - Call `localStorage.getItem` with key `friends`, parse the string and construct a value (`JSON.parse`), and then set the value of `friends` to:

         - An empty array if the constructed value is `null`
         - Otherwise, the constructed value

     - `addFriend`

       - Goal: add new friend using with the given name and age
       - Signature: parameters: none, returns: `undefined`, side-effect: state
       - Explanation: push a new object into friends, assigning the given name and age properties, and then call `saveState`

     - `renderFriendList`

       - Goal: render a list of friend names and ages
       - Signature: parameters: none, returns: `undefined`, side-effect: updates UI
       - Explanation:

         - Set the `innerHTML` of `friendList` to a string containing `div`s for each friend where the friend names in an `h2`
         - Add click event listeners to each `h2` in `friendList` that alerts the friend age

   - Add a click event listener to `addButton` that:

     - Returns alert if one or both inputs are empty
     - Otherwise:

       - Calls `addFriend`
       - Clears the inputs
       - Calls `renderFriendList`

   - Call `loadState`
   - Call `renderFriendList`

## [Code](index.html)
