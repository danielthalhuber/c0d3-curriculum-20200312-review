# Display Lessons in a Web Page

## Goal

Create an HTML file that sends a request to https://country.register.gov.uk/records.json?page-size=500 and then displays each country's official name in an `h1` element. When the official name is clicked, the countries citizen name should be alerted.

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `div.country-list`
   - `script`

3. In the `script`:

   - Create the following state:

     - `countryList`: the `div.country-list` element
     - `countries`: array of objects containing country data

   - Create the following functions:

     - `showMore`:

       - Description: alert the citizen-name for the given country
       - Signature:

         - Parameters:

           - `i`: number representing index of country

         - Returns: `undefined`
         - Side-effects: calls alert

       - Explanation: call alert with the description of the given `id`

     - `updateCountries`

       - Description: request country data from the API endpoint
       - If request is fulfilled:

         - Clear any existing countries from `countries`
         - For each country:

           - Add the country to `countries`
           - `h1` elements to `countryList` with a click event listener that calls `showMore` with country's id

       - If the request is rejected, log the error to the console

   - Initialize the app by calling `updateCountries`

## [Code](index.html)
