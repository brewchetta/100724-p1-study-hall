// ARRAYS //
// 
// 1. What is an array? How is an array related to an object?
// 
// arrays have id / numbers / indexes and values

// 2. What does it mean to say an array has indexes (indicies)? What number do they start with?
// 

// 3. What does iteration mean?
// 
// iterating means going through each item inside of something (our array)



// 4. What are two types of loops you can use to iterate through an array?
// 

const array = [1,2,3,4,5]
let i = 0

while (i < array.length) {
    console.log(i)
    i++
}

const myCallback = (item) => console.log(item)
array.forEach( myCallback ) //=> return undefined

const whatAmI = array.map( item => item + 1 ) //=> return a new array that is going to be as long as the original array

for (item of array) {
    console.log(item)
} 

for (let index = 0; index < array.length; index++) {
    console.log( array[index] )
}

for (index in array) {
    console.log( array[index] )
}

// 5. What is a method in relation to an array? What are two examples of array methods?
// 
// a function that acts on an array
// .find. .filter, .forEach, .map

// 6. What is a callback function? How is it used with the `.forEach` method?
// 


// 7. What is the difference between `.forEach` and `.map`? HINT: What do each of them return after iterating?