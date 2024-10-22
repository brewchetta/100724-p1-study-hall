// 1. What is asynchronous code?
// 
// async code runs out of order, usually after the synchronous code

// 2. What is `fetch` used for?
// 
// fetch is used to make requests (often for CRUD actions), saying please to a server

// 3. What is a Promise? Does `fetch` return a Promise?
// 
// a promise is telling us we've asked for something and it'll give us something back
// fetch returns a promise
// pending, fulfilled, rejected

// 4. What is `.then` used for?
// 
// does somehting similar to async await where we wait for the previous promise to complete before moving on
// promise will move to .then once it is not pending anymore

// 5. What is async/await used for?
// 
// wait for this await line before moving to the next line

// 6. What are HTTP Status codes? What does a 200 mean? What does a 404 mean?
// 
// 200 - ok - yes we did a good job everything's fine
// 404 - not found - could not find that page or route or whatever
// comes with the response and lets us know how the request went

// 7. What are four different methods for requests? (For example GET)
// 
// GET, POST, PATCH, DELETE (CRUD)

// 8. What is CRUD?
// 
// create, read, update, delete
// the four things we do with DATA

// 9. What is JSON data?
// 
// javascript object notation --> digestible way of sending javascript through the internet
// most often object or array

// 10. How do we set the headers to send JSON data?
// 

const nameInput = "Chett"

const response = await fetch('http://whatever', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( { nameInput } )
})

const data = await response.json() //<<<<< super important to use parentheses in this step

console.log(data)

// 11. What is the body in a request? How do we parse the body?
// 
// 12. What does `request.json()` do?