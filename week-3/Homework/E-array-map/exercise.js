// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//solution 1 - callback function:

/*
let numbersMultiplied = numbers.map(function (number){
    return number * 100
})

console.log(numbersMultiplied) // prints: [ 10, 20, 30, 40, 50 ]

*/

//solution 2
/*

let numbersMultiplied = numbers.map(number => {
    return number * 100
}) 

console.log(numbersMultiplied)  // prints: [ 10, 20, 30, 40, 50 ]
*/

//solution 3


let numbersMultiplied = numbers.map(number => number * 100) 

console.log(numbersMultiplied)  // prints: [ 10, 20, 30, 40, 50 ]




