# Request & Response - Exercise & Learn

## Purpose

This exercise provides an opportunity to:

- Send and receive HTTP requests
- Observe HTTP responses
- Learn industry best practices

## Overview

In this exercise, requests are made to a todo-app API to:

- Create accounts
- Create, read, update, and delete (CRUD) todo items

The requests are all Cross-Origin in nature:

- Browser will load an HTML file from your hard drive that contains code to make requests
- The file is located on your computer, so the origin of the requests is your computer
- The requests are made to a remote host
- The origin and server will have different host names, triggering a cross-domain request handshake

## Process

1.  Get started

    - Start with a [template client app file](index-template.html)
    - Create [a copy](index.html) to modify throughout this exercise
    - Read the client app code, identify the functions and classes and explain what they do

      - Client app classes and functions:

        - `Todo`: constructor function that creates a new todo item in the UI
        - `render`: function that renders the initial todo UI
        - `setupLogin`: function that renders the login UI
        - `setupSignup`: function that renders the sign-up UI
        - `startApp`: function that initializes the application (runs when page loads)

2.  In the `startApp` function

    - Send a GET request to `https://js5.c0d3.com/auth/api/sessions`
    - Observe the network request and note the response code and JSON response body
    - If the response JSON has an `error` key, run the `setupLogin` function to render the login page and stop the function
    - Solution:

      ```js
      const startApp = () => {
        fetch('https://js5.c0d3.com/auth/api/sessions')
          .then((response) => response.json())
          .then((jsonBody) => {
            if (jsonBody.hasOwnProperty('error')) setupLogin();
          });
      };
      startApp();
      ```

3.  The login UI is rendered, but we're unable to login since we don't have an account.

    - Click on the signup link
    - On the signup page, enter information for a new account and then click submit
    - Notice that nothing happens
    - Attempt to fix this issue by sending a POST request to `https://js5.c0d3.com/auth/api/users` when the signup button is clicked with an empty body:

      - Solution (attempt):

        ```js
        $submit.addEventListener('click', () => {
          fetch('https://js5.c0d3.com/auth/api/users', {
            method: 'POST',
          })
            .then((response) => response.json())
            .then(console.log);
        });
        ```

      - Response body:

        ```http
        {"error":{"message":"password field cannot be empty and must be base 64 encoded with more than 5 characters"}}
        ```

    - So it's a little difficult to create an account if we don't send any account information to the server. But take a look at the error message: it's telling us that the server expects to receive a base 64 encoded value for the password.
    - The `Window.btoa` method can be used to create a base 64 encoded ASCII string from a binary string (a regular string in JavaScript)
    - Resend the POST request, but this time include the values from the form and use `btoa` to encode the password before sending it

      - Solution:

        ```js
        $submit.addEventListener('click', () => {
          fetch('https://js5.c0d3.com/auth/api/users', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              name: $name.value,
              username: $username.value,
              email: $email.value,
              password: btoa($password.value),
            }),
          })
            .then((response) => response.json())
            .then(console.log);
        });
        ```

      - Response body:

        ```http
        {"name":"A Name","username":"ausername","email":"an@e.mail","id":"3c898ab7-0775-4043-95f9-e9b082cf2322","jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lZCIsImlhdCI6MTU4NjIxMTkyOH0.HMVtmNf4PILShsRTOPAMKnoAKRv_MomGzOkpAZ0hERk"}
        ```

    - Look at the response header and note that it includes a Set-Cookie field with a value indicating the cookie value

4.  Where's the cookie?

    - Check to see if the browser followed the instructions
    - Note that there's no cookie for this site/app
    - Normally the browser would set the cookie, and then automatically send it with every request to the server
    - But in this case, our app has a different hostname than the server, so we have a cross-origin request
    - We need to tell the browser that we want to respect the `set-cookie` directive
    - This is done by passing the options property `credentials: 'include'` to fetch

      - Solution:

        ```js
        $submit.addEventListener('click', () => {
          fetch('https://js5.c0d3.com/auth/api/users', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              name: $name.value,
              username: $username.value,
              email: $email.value,
              password: btoa($password.value),
            }),
          })
            .then((response) => response.json())
            .then(console.log);
        });
        ```

5.  Use cookies in the Todo UI

    - Update the GET request in `startApp` so that it sends a cookie
    - If the response body contains a `username` property, assign it to `globalUsername` and call `render`

      - Solution:

        ```js
        const startApp = () => {
          fetch('https://js5.c0d3.com/auth/api/sessions', {
            credentials: 'include',
          })
            .then((response) => response.json())
            .then((jsonBody) => {
              if (jsonBody.hasOwnProperty('error')) return setupLogin();
              if (jsonBody.hasOwnProperty('username')) {
                globalUsername = jsonBody.username;
                render();
              }
            });
        };
        ```

6.  Fix sign-up and login

    - Update the sign up request so that it also assigns a value to `globalUsername` and calls `render` when the response body contains a `username` property.

      - Solution:

        ```js
        $submit.addEventListener('click', () => {
          fetch('https://js5.c0d3.com/auth/api/users', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              name: $name.value,
              username: $username.value,
              email: $email.value,
              password: btoa($password.value),
            }),
          })
            .then((response) => response.json())
            .then((jsonBody) => {
              if (jsonBody.hasOwnProperty('username')) {
                globalUsername = jsonBody.username;
                render();
              }
            });
        });
        ```

    - Fix the login UI so that it allows users to login.

      - Solution:

        ```js
        $submit.addEventListener('click', () => {
          // Login button click
          fetch('https://js5.c0d3.com/auth/api/sessions', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              username: $username.value,
              password: btoa($password.value),
            }),
          })
            .then((response) => response.json())
            .then((jsonBody) => {
              if (jsonBody.hasOwnProperty('username')) {
                globalUsername = jsonBody.username;
                render();
              }
            });
        });
        ```

7.  Update the Todo UI so that when enter is typed into the input box, a todo item is created.

    - Send a POST request to `https://js5.c0d3.com/todolist/api/todos`
    - Start by sending an empty body
    - Use the response to figure out how to render a todo in the UI

    - Solution:

      ```js
      const render = () => {
        // ...
        input.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') {
            // Tell the server to create a todo item!
            fetch('https://js5.c0d3.com/todolist/api/todos', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify({
                text: e.target.value,
              }),
            }).then((_) => render());
          }
        });

        // ...
      };
      ```

8.  When `render` is called, render the todo items for the user.

    - Get all the todo items by sending a GET request to `https://js5.c0d3.com/todolist/api/todos`
    - Create `Todo`s from the todo items received

      ```js
      const render = () => {
        // ...

        const $todolist = $appContainer.querySelector('.todolist');
        // create a Todo object like this: new Todo(element, $todolist)
        fetch('https://js5.c0d3.com/todolist/api/todos', {
          credentials: 'include',
        })
          .then((response) => response.json())
          .then((todos) => {
            todos.forEach((todo) => new Todo(todo, $todolist));
          });
      };
      ```

9.  Make the delete button work.

    - Send a DELETE request to `https://js5.c0d3.com/todolist/api/todos/:id`
    - Call `render` when the response is received
    - Solution:

      ```js
      function Todo(todo, container) {
        // ...
        const renderNormal = () => {
          // ...
          const $delete = todoContainer.querySelector('.delete');
          $delete.addEventListener('click', () => {
            // Delete the todo element from the server
            fetch(`https://js5.c0d3.com/todolist/api/todos/${todo.id}`, {
              method: 'DELETE',
              credentials: 'include',
            }).then((_) => render());
          });
        };
        // ...
      }
      ```

10. Enable a todo to be modified.

    - Make the save button work:

      - Send a PATCH request to `https://js5.c0d3.com/todolist/api/todos/:id`
      - Call `render` when the response is received
      - Solution:

        ```js
        function Todo(todo, container) {
          // ...
          const renderEdit = () => {
            todoContainer.innerHTML = `
            <input type="text" class="todo-edit-input" value="${todo.text}">
            <section>
            <button class="item-button cancel">Cancel</button>
            <button class="item-button save">Save</button>
            </section>
          `;
            const $cancel = todoContainer.querySelector('.cancel');
            $cancel.addEventListener('click', renderNormal);
            const $todoInput = todoContainer.querySelector('.todo-edit-input');
            const $save = todoContainer.querySelector('.save');
            $save.addEventListener('click', () => {
              // Update the todo element with new text
              fetch(`https://js5.c0d3.com/todolist/api/todos/${todo.id}`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                  text: $todoInput.value,
                }),
              }).then((_) => render());
            });
          };
          // ...
        }
        ```

    - Enable a todo's completed status to be toggled when it's text is clicked:

      - Send a PATCH request to `https://js5.c0d3.com/todolist/api/todos/:id`
      - Call `render` when the response is received
      - Solution:

        ```js
        function Todo(todo, container) {
          // ...
          const todoContainer = element.querySelector('.todo-container');
          const renderNormal = () => {
            todoContainer.innerHTML = `
            <h1>${headerStr}</h1>
            <section>
            <button class="item-button edit">Edit</button>
            <button class="item-button delete">Delete</button>
            </section>
          `;
            const edit = todoContainer.querySelector('.edit');
            edit.addEventListener('click', renderEdit);
            const $h1 = todoContainer.querySelector('h1');
            $h1.addEventListener('click', () => {
              // Update the todo element with the opposite complete status
              fetch(`https://js5.c0d3.com/todolist/api/todos/${todo.id}`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                  complete: !todo.complete,
                }),
              }).then((_) => render());
            });
            // ...
          };
          // ...
        }
        ```
