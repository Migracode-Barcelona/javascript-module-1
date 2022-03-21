/*

Exercise H (10 mins)
Create a function which:
Takes an array of names
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :(

*/

const nameList = ["Cristiane", "Joana", "Carmem" , "Maria", "Ana", "Jessica"];


const findingCris = function (people){
    if (people === "Cristiane")
    return "Found me!"
    else 
    return "Haven't found me"

}

console.log(findingCris("Cristiane"))


//Prints:
//Found me!



// completar com  o find 

// function findingCris(person) {
//     if (person === nameList.find(person)){
//         return "Found me!"
//     } else {
//         return "Haven't found me"
//     }
// }

// console.log(findingCris("Cristiane"));