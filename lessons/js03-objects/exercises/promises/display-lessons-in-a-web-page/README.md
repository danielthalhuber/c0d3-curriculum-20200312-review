# Display Lessons in a Web Page

## Goal

Create an HTML file that sends a request to https://c0d3.com/api/lessons and displays each lesson title in an `h1` element. When a title is clicked, the lesson description should be logged.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `div.lesson-list`
   - `script`

3. In the `script`:

   - Create the following state:

     - `lessonList`: the `div.lesson-list` element
     - `lessons`: array of objects containing lesson data

   - Create the following functions:

     - `showDescription`:

       - Description: alert the description for the given lesson
       - Signature:

         - Parameters:

           - `i`: number representing index of lesson

         - Returns: `undefined`
         - Side-effects: calls alert

       - Explanation: call alert with the description of the given `id`

     - `updateLessons`

       - Description: request lesson data from the API endpoint
       - If request is fulfilled:

         - Clear any existing lessons from `lessons`
         - For each lesson:

           - Add the lesson to `lessons`
           - `h1` elements to `lessonList` with a click event listener that calls `showDescription` with lesson's id

       - If the request is rejected, log the error to the console

   - Initialize the app by calling `updateLessons`

## [Code](index.html)
