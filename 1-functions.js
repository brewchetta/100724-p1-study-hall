// FUNCTIONS //
// 
// 1. What is a function and why do we use them?

// A piece of code that accepts arguments and can be called multiple times
// Allows us to perform repetetive tasks easily (and hopefully efficiently)

// 2. What is the difference between declaring a function and a function call?
// 

// deaclaring a function is setting up its parameters, returns, internal code, etc
// calling a function means that the function runs and we might get a value out of it

function doStuff() {
    return "Doing stuff"
}

doStuff()
doStuff()
doStuff()

// arrow function

const arrowFunk = () => {
    return "I am an arrow function"
}

const arrowFunk2 = () => "I am an arrow function"

const whatDoesItSay = arrowFunk() //=> "I am an arrow function"

// 3. What does 'return' do in a function? What happens to code below a return?
// 
// 4. What is a parameter? What is an argument? When do you use each?
// 

function withParams(thing1, thing2) { // thing1 and thing2 are parameters
    thing1 + thing2
}

withParams(1, 2) // with arguments

// 5. What is a default argument? How is it used?
// 

function withDefault(hamburger="Whatever") {
    return hamburger + " is a default argument"
}

withDefault("Something else") //=> Something else is a default argument
withDefault() //=> Whatever is a default argument

// 6. What is scope? How are variables inside a function scoped?
// 

const outside = "Outside the function"

function scopedFunk() {

    const inside = "Inside the function"
    let favoriteFood = "pizza"

    function someOtherFunk() {
        favoriteFood = "hot dogs"
    }

    function innerInnerFunk() {
        const reallyInside= "Really inside the function"
        favoriteFood = "doughnuts"
        someOtherFunk()
    }

    innerInnerFunk()

    return favoriteFood
}

const outsideFood = favoriteFood

console.log(favoriteFood)

const nestedObject = {
    name: "Chett",
    favFoods: {
        mostFavorite: "pizza",
        secondMost: "Hamburgers",
        least: "Durians",
        others: {
            heresOne: "Cateloupe",
            anotherOne: "Honeydew"
        }
    }
}

// 7. What does it mean that functions are first class citizens in js?
// 
// functions are technically objects and they have some of the attributes that objects have
// ALSO they can be saved to variables, we can pass functions as an argument

function functionOne() {
    console.log("I am function one")
}

function functionTwo(fn) {
    fn()
}

functionTwo( functionOne )