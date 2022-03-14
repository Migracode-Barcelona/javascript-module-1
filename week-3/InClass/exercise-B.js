let peopleOnMyClass = ["Cristiane" , "Valeria" , "Diego" , "Alejandra" , "Yennifer" , "Angel "];

let peopleFromTheOtherClass = peopleOnMyClass.concat("Yogi ", "Diana ", "Abdul ", "Carlos ", "Vincent ", "David ")

console.log(peopleFromTheOtherClass.sort())


/* prints  
[
  'Abdul ',     'Alejandra',
  'Angel ',     'Carlos',
  'Cristiane ', 'David',
  'Diana',     'Diego',
  'Valeria',   'Vincent',
  'Yennifer',  'Yogi'
]
*/

// function callingByTheName(people){
//     if (peopleOnMyClass == people) {
//         return `${people} is at the class with ${peopleOnMyClass}`
//     } 
//         return `${people} is not at the class with ${peopleOnMyClass}`

// }



// prints:

// Vincent is not at the class with Cristiane,Valeria,Diego,Alejandra,Yennifer,Angel

function callingByTheName(name, arr){
    if (!arr.includes(name)){
        return `${name} is not at the class with ${peopleOnMyClass}`
    }
    return  `${name} is at the class with ${peopleOnMyClass}`
}

console.log(callingByTheName("Juan", peopleFromTheOtherClass))


// prints: Juan is not at the class with Cristiane,Valeria,Diego,Alejandra,Yennifer,Angel 