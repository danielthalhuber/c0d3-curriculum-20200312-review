# Lesson: JS1 - HTML & Functions

## HTML

### How to Follow Along

Consider changing quote to strong/bold:

> When you open the file (double click or right click → open with browser), you should see a Welcome! heading and an input box. The large Welcome! text and the input box that the browser displays from the `h1` and `input` ~~`elements`~~ **elements**.

Grammar, add the article "An":

> HTML element is everything from the opening tag to the closing tag:

> An HTML element is everything from the opening tag to the closing tag:

It might be useful to reframe (or possibly summarize) the description of tags and elements from a top-down perspective:

- Elements are the parts that make up the HTML document
- Elements are composed of tags and enclosed content
- All elements begin with an opening tag
- Some elements are only composed of an opening tag
- Most elements have closing tags as well as content enclosed between the opening and closing tags

### HTML Example

> Create a new HTML file, call it `challenge1.html`, open it in your browser, and try to match each **tag** instruction with its corresponding **element**!

What does it mean to "match each **tag** instruction with its corresponding **element**"? There's nothing to do here but type the code into the file and view it in a browser. It might make more sense to describe the activity as something like, "add the following code to the file, save the file, and view it in your browser".

Consider adding "in":

> (Note that we're getting you started on a later exercise, **in** which you will write HTML instructions for Challenge 1 from the previous lesson.)

### Browser JavaScript

Since we're adding a `script` element (opening and closing tags with enclosed content), we should say _element_ instead of _tag_:

> This is called **dynamic** behavior. To get started, we'll add a `<script>` **~~tag~~ element**, which tells the browser to treat the text inside as JavaScript and run the code.

### Getting HTML Elements

Grammar, plural "browsers":

> `document.querySelector` is another common javascript method (or function) supported by most browser**s**.

Grammar recommendations:

- Add article "the", i.e. "we ran **the** `document.querySelector` method"
- Add comma and the article "an", i.e. "in this case, **an** `input` element"
- Remove redundant "in", i.e. "we passed ~~in~~ `'input'`"
- Move final period from before to after final closing parentheses

> In the example above, we ran **the** `document.querySelector` method (or function) and passed ~~in~~ `'input'` as the argument. This method searches through all the elements on the page and returns the first element that matches the specified selectors (in this case **an** 'input' element ~~.~~)**.**

### Element Properties

#### Value

In this subsection, we return to `challenge1.html` and leverage the class attributes added in a previous example. The student might not have made these changes to their `challenge1.html` file.

In such cases it would be useful to remind the student to add the classes before proceeding with this section. Alternatively, the student could be instructed to do this work in the previous section.

### Exercises

1. [Create an HTML page](./html-ex01-create-an-html-page.html)
2. [Create a UI for JS0 Challenge 1](./html-ex02-ui-for-js00c01.html)
3. [Create a UI for JS0 Challenge 3](./html-ex03-ui-for-js00c03.html)
4. [Create a UI for JS0 Challenge 7](./html-ex04-ui-for-js00c07.html)
5. [Create a UI for JS0 Challenge 8](./html-ex05-ui-for-js00c08.html)
