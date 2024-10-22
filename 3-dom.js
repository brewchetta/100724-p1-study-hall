// 1. What is the DOM? What is a tree structure? What is the parent/child relationship?
// 

// Every element has a parent and possibly children, can traverse between parents and children
// Document Object Model

// 2. What is `.querySelector` used for in relation to the DOM?
// 
// 3. What is the difference between `.querySelector` and `.querySelectorAll`?
// 
// gets the first element vs all the elements

// 4. What is `.createElement` and how do we append a new element to the DOM?
// 


// 5. How can I change the text of an element on the DOM?
// 

// select it first and then change the textContent (whatever.textContent = "new content")

// 6. What is an event listener? What are the two arguments of an event listener?
// BONUS: What is event propagation?
// 

button.addEventListener("event that triggers it", callbackFunction)

// 7. In an event callback how can I access the triggering event?
// 


// 8. What does `.preventDefault` do in an event callback?
// 

function callbackFunction(event) { // event is the triggering event
    event.preventDefault()
}

// prevents default actions for example the form refreshing the page

// 9. What is the `event.target`?
// 

function callbackFunction(event) { // event is the triggering event
    event.preventDefault()
    event.target // --> the element that triggers it / in this case 'button'
}

// 10. What attribute of an `<input type="text">` tag gets the current text?

const myInput = document.querySelector('input')
const theTextInside = myInput.value