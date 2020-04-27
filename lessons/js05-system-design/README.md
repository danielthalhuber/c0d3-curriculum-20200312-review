# JS5 - System Design & Theory

## Preflight

- [ ] Exercise 3 should have comment that asks question (e.g. what gets printed?)

## Overview

- [ ] Fix typo: add definite article

  > Previously, you learned that URL is made up [...]

  > Previously, you learned that **a** URL is made up [...]

- [ ] Fix typo: make deals singular (headers deal vs. headers deals)

  > http - Runs on port 80 by default, specifies what headers are in the request and what the header means. The headers we cover in this lesson deal~~s~~ specifically with the http protocol.

## Request & Response

> Nice to see a mention of [the mermaid project](https://github.com/mermaid-js/mermaid)!

### Request

- [ ] Consider adding header text as an example

Example:

```http
GET /JS-5-System-Design-Theory-67e7ee647a1c429d8e60e82f13a8d286 HTTP/1.1
Host: www.notion.so
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) Gecko/20100101 Firefox/74.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
DNT: 1
Connection: keep-alive
Cookie: __cfduid=d23..872; notion_browser_id=832..fd9; logglytrackingsession=dc97..10; amplitude_id_af..59notion.so=eyJk...J9; ajs_user_id=%22e...0%22; ajs_group_id=%22...4%22; ajs_anonymous_id=%22d...3f8%22; intercom-id-gpfdrxfd=f77a...923; intercom-session-gpfdrxfd=cGZCc...7; token_v2=f5f7b6c...0e6; notion_user_id=e8...0; notion_users=%5B...5D
Upgrade-Insecure-Requests: 1
```

Requests contain 2--3 parts

- Request Line

  - Contains three parts separated by spaces:

    - Method: describes the desired action to be performed for a given resource
    - URI: path to the resource
    - Protocol and version

  - Example:

    ```http
    Method URI Protocol/Version
    ```

    ```http
    GET /JS-5-System-Design-Theory-67e7ee647a1c429d8e60e82f13a8d286 HTTP/1.1
    ```

- Headers

  - Collection of several header fields, delimited by newline characters
  - Example:

    ```http
    Host: www.notion.so
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) Gecko/20100101 Firefox/74.0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate, br
    DNT: 1
    Connection: keep-alive
    Cookie: __cfduid=d23..872
    Upgrade-Insecure-Requests: 1
    ```

- Body

  - Text encoded data to be consumed by a host (client or server)
  - Example of JSON data body:

    ```http
    { "taskIds": [] }
    ```

#### Request Methods

- GET

  - **Purpose: request a resource**
  - Default request type for browsers
  - Should not include a body

- HEAD

  - **Purpose: request response headers**
  - Response to HEAD request should only contain headers
  - Should not include a body

- POST

  - **Purpose: submit a new entity** to the specified resource
  - Should contain a body containing the data/item that needs to be created

- PUT

  - **Purpose: replaces all current representations of the target resource (entity)** with the request payload (body)
  - Should contain a body

- PATCH

  - **Purpose: edit/modify target resource (entity)** with request payload (body)
  - Should contain a body

- DELETE

  - **Purpose: delete** specified resource (entity)
  - Should not include a body

- OPTIONS

  - **Purpose: describe communication options** for the specified resource

#### Request Headers

Every request contains headers.

Common request types:

- Content-Type

  - Specifies the type of the data contained in the body
  - Common data types (content types):

    - application/json: JSON data
    - text/html: HTML text
    - image/gif: GIF image
    - video/mpeg: MPEG video

- Authorization

  - Used by remote host to identify the requester
  - Must be set by the developer (not automatically set by browser)

- Cookie

  - Used by remote host to identify the requester
  - By default, browser includes and sets this header automatically

- User-Agent

  - Information about the requester's application (browser, CLI application, etc.) and operating system

- Origin

  - Indicates the hostname where the request originated

- ETag

  - String (hash) representing an entity (e.g. image) that has already been sent to the browser
  - If the remote host receives a request for an resource/entity and the ETag in the request matches the requested resource, the server will not send the requested resource in the response (to conserve available bandwidth)

#### Request Examples

- POST Request

  - HTTP:

    ```http
    POST /posts HTTP/1.1
    Host: jsonplaceholder.typicode.com
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 02100853-fcbb-43f8-8ecb-cf53d20bd2c6,fe3d434c-a070-4690-a27e-aab7a213b613
    Accept-Encoding: gzip, deflate
    Content-Length: 68
    Connection: keep-alive
    cache-control: no-cache

    { "title": "foo", "body": "bar", "userId": 1 }
    ```

  - JavaScript:

    ```js
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    ```

- Patch Request

  - HTTP:

    ```http
    PATCH /posts/1 HTTP/1.1
    Host: jsonplaceholder.typicode.com
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 85d2c8b9-7e21-4543-9c88-c104c0d0efdc,536d12d8-18af-456d-9716-1ca5428c8e42
    Host: jsonplaceholder.typicode.com
    Cookie: __cfduid=d0268b3352f119b2e6bb60bb13cb6fbe91586190331
    Accept-Encoding: gzip, deflate
    Content-Length: 22
    Connection: keep-alive
    cache-control: no-cache

    { "title": "foo" }
    ```

  - JavaScript:

    ```js
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    ```

### Response

Example:

```http
HTTP/1.1 201
status: 201
Date: Mon, 06 Apr 2020 16:40:46 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 65
Connection: keep-alive
X-Powered-By: Express
Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
Access-Control-Expose-Headers: Location
Location: http://jsonplaceholder.typicode.com/posts/101
X-Content-Type-Options: nosniff
Etag: W/"41-GDNaWfnVU6RZhpLbye0veBaqcHA"
Via: 1.1 vegur
CF-Cache-Status: DYNAMIC
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
CF-RAY: 57fcf3d78ddc6da0-SJC

{ "title": "foo", "body": "bar", "userId": 1, "id": 101 }
```

Responses are structurally similar to requests in that they contain 2--3 parts:

- Status line

  - Consists of the protocol and version, followed by a status code
  - Example:

    ```
    HTTP/1.1 201
    ```

- Headers

  - One or more header fields, delimited by newline characters
  - Example:

    ```http
    status: 201
    Date: Mon, 06 Apr 2020 16:40:46 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 65
    Connection: keep-alive
    X-Powered-By: Express
    Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
    Access-Control-Allow-Credentials: true
    Cache-Control: no-cache
    Pragma: no-cache
    Expires: -1
    Access-Control-Expose-Headers: Location
    Location: http://jsonplaceholder.typicode.com/posts/101
    X-Content-Type-Options: nosniff
    Etag: W/"41-GDNaWfnVU6RZhpLbye0veBaqcHA"
    Via: 1.1 vegur
    CF-Cache-Status: DYNAMIC
    Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
    Server: cloudflare
    CF-RAY: 57fcf3d78ddc6da0-SJC
    ```

- Body

  - Text encoded data to be consumed by a host (client or server)
  - Example of JSON data body:

    ```http
    { "title": "foo", "body": "bar", "userId": 1, "id": 101 }
    ```

#### Status Codes

Status codes are three digit numbers ranging from 100--599 and are grouped into the following 5 classes ([IANA](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)):

- 1xx informational response – the request was received, continuing process
- 2xx successful – the request was successfully received, understood, and accepted
- 3xx redirection – further action needs to be taken in order to complete the request
- 4xx client error – the request contains bad syntax or cannot be fulfilled
- 5xx server error – the server failed to fulfil an apparently valid request

Status codes in the 300 range will change the expected/default behavior in a browser. The most common are:

- 302 Found (Previously "Moved temporarily")

  - Tells the client to look at (browse to) another URL.
  - 302 has been superseded by 303 and 307, despite the fact that it's still commonly used

- 303: See Other

  - The response to the request can be found under another URI using the GET method.
  - When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI.

- 307 Temporary Redirect (since HTTP/1.1)

  - The current request should be repeated with another URI
  - However, future requests should still use the original URI.
  - In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.

- 304 Not Modified (RFC 7232)

  - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
  - In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.

The other status codes are primarily informational. In addition to the previously listed 3xx codes, the follow are worth understanding and memorizing:

- 200 OK

  - Standard response for successful HTTP requests.
  - Actual response will depend on the request method used:
    - In a GET request, the response will contain an entity corresponding to the requested resource.
    - In a POST request, the response will contain an entity describing or containing the result of the action.

- 201 Created

  - The request has been fulfilled, resulting in the creation of a new resource.

- 400 Bad Request

  - The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).

- 403 Forbidden

  - The request contained valid data and was understood by the server, but the server is refusing action.
  - This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed).
  - This code is also typically used if the request provided authentication via the WWW-Authenticate header field, but the server did not accept that authentication.
  - The request should not be repeated.

- 404 Not Found

  - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.

- 418 I'm a teapot (RFC 2324, RFC 7168)

  - This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers.
  - The RFC specifies this code should be returned by teapots requested to brew coffee.
  - This HTTP status is used as an Easter egg in some websites

- 500 Internal Server Error

  - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

#### Response Headers

Common response headers:

- `Cache-Control`

  - This header tells the browser to save the response body for a period of time
  - Within this time period, the browser should used the saved data instead of sending the request
  - This not only saves bandwidth for the user, but also makes the website faster
  - Example that saves the response for 1 hour: `Cache-Control: max-age=3600`

- `ETag`

  - A hash string that represents the content of the response body.
  - The browser will now send this `ETag` with every request with the same URL.

- `Server` - A name for the server that processed the request.
- `Set-Cookie`

  - This header tells the browser to set a cookie.
  - After the browser sets the cookie, the browser will automatically send the cookie in the request header with every request to the same host name.

- `Content-Type` - This header tells the browser how to read the response body.

Some response headers have very specific use cases. The header below is used in conjunction with 300 status codes.

- `Location` - This header contains a URL, which tells the requesting client the new URL to resend the request to.

When the browser needs to make cross domain request, it first sends an OPTIONS request. The browser looks for very specific headers in the response to determine if it should proceed to send the cross-domain request. Key cross domain response headers:

- `Access-Control-Allow-Origin`

  - Contains the host name that is allowed to send the cross domain request.
  - If this does not match the hostname of the site that the user is on, then the cross domain request is rejected (and should not be initiated by the browser)

- `Access-Control-Allow-Credentials`

  - If this is true in the response header, then the cross domain request will include a cookie header.
  - If this is false, the browser will not set the cookie header when sending the cross origin request.

- `Access-Control-Allow-Methods`

  - This is a comma separated string that tells the browser what request methods are allowed in the cross domain request.
  - The request will be rejected if the request method is not included in this response header.

### Exercise and Learn

See [todo exercise](exercises/req-and-res-todo/README.md)

#### Takeaways

The todo exercise covered a few important concepts:

- Client Side Rendering

  - Changes to the HTML are made on the client side with JavaScript
  - Later in this lesson, Server Side Rendering will be covered

- Session

  - Represents the application state when a user is logged in
  - Starts with login
  - Ends at logout or timeout

- Cross Site Request

  - Request made by the browser that originates on a page on a host/site to a resource on a different host/site

#### REST

Recall from the todo exercise, there was a pattern to the URLs used by the HTTP requests:

- POST and GET: `https://js5.c0d3.com/todolist/api/todos`
- PATCH and DELETE: `https://js5.c0d3.com/todolist/api/todos/:id`

This pattern is part of an industry practice called REST (Representational State Transfer). This pattern makes APIs easier understand and implement. It is not a standard, but a widely adopted best practice.

The examples we covered in the todo exercise covered a subset of the full REST pattern for the todo and user resource.

**Todo Resource**

| Method | Path       | Action                                                                                                       | Body Required |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------ | ------------- |
| GET    | /todos     | Get a list of the todos                                                                                      | No            |
| GET    | /todos/:id | Get data for the todo with the given id                                                                      | No            |
| POST   | /todos     | Create a new todo                                                                                            | Yes           |
| PUT    | /todos/:id | Replace the existing todo with the given id, or create a new todo if a todo does not exist with the given id | Yes           |
| PATCH  | /todos/:id | Update the specified todo's attributes with the given data                                                   | Yes           |
| DELETE | /todos/:id | Delete the specified todo                                                                                    | No            |

**User Resource**

| Method | Path       | Action                                                                                                       | Body Required |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------ | ------------- |
| GET    | /users     | Get a list of the users                                                                                      | No            |
| GET    | /users/:id | Get data for the user with the given id                                                                      | No            |
| POST   | /users     | Create a new user                                                                                            | Yes           |
| PUT    | /users/:id | Replace the existing user with the given id, or create a new user if a user does not exist with the given id | Yes           |
| PATCH  | /users/:id | Update the specified user's attributes with the given data                                                   | Yes           |
| DELETE | /users/:id | Delete the specified user                                                                                    | No            |

Key points:

- Resource names in REST paths are plural
- This pattern must be memorized

#### Exercises

1. Write the REST convention for the following resource: Store

   | Method | Path        | Action                                                                                                     | Body Required |
   | ------ | ----------- | ---------------------------------------------------------------------------------------------------------- | ------------- |
   | GET    | /stores     | Get a list of stores                                                                                       | No            |
   | GET    | /stores/:id | Get data for the specified store                                                                           | No            |
   | POST   | /stores     | Create a new store with the given data                                                                     | Yes           |
   | PUT    | /stores/:id | Replace the store with the specified id, or create a new store if a store does not exist with the given id | Yes           |
   | PATCH  | /stores/:id | Update the specified store with the given data                                                             | Yes           |
   | DELETE | /stores/:id | Delete the specified store                                                                                 | No            |

2. Write the REST convention for the following resource: Robot

   | Method | Path        | Action                                                                                                         | Body Required |
   | ------ | ----------- | -------------------------------------------------------------------------------------------------------------- | ------------- |
   | GET    | /robots     | Get a list of robots                                                                                           | No            |
   | GET    | /robots/:id | Get data for the specified robot                                                                               | No            |
   | POST   | /robots     | Create a new robot with the given data                                                                         | Yes           |
   | PUT    | /robots/:id | Replace the existing robot with the given id, or create a new robot if one does not already exist with that id | Yes           |
   | PATCH  | /robots/:id | Update the specified robot with the give data                                                                  | Yes           |
   | DELETE | /robots/:id | Delete the specified robot                                                                                     | No            |

3. Write the REST convention for the following resource: Relationship

   | Method | Path        | Action                                                                                                                 | Body Required |
   | ------ | ----------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- |
   | GET    | /robots     | Get a list of relationships                                                                                            | No            |
   | GET    | /robots/:id | Get data for the specified relationship                                                                                | No            |
   | POST   | /robots     | Create a new relationship with the given data                                                                          | Yes           |
   | PUT    | /robots/:id | Replace the relationship with the given id, or if a relationship with the given id doesn't not exist, create a new one | Yes           |
   | PATCH  | /robots/:id | Update the specified relationship with the given data                                                                  | Yes           |
   | DELETE | /robots/:id | Delete the specified relationship                                                                                      | No            |
