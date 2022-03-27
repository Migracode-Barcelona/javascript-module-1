/*

Exercise H (10 mins)
Create a function which:
Takes an array of names
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :(

*/

const nameList = ["Cristiane", "Joana", "Carmem" , "Maria", "Ana"];

// I did in two ways, this first one I was not happy about it:

//   function findingPeople(nameList){
//     if (nameList === "Cristiane") // boolean
//     return "Found me!"
//     else 
//     return "Haven't found me"
// }
// console.log(findingPeople("Cristiane"))

// I Kept practicing, and I found this new way a little bit easier now, and I can use properly an array method ( better than put my name dirrectly at the function):

const findingPeople = (nameList) => {
    if (nameList.includes(nameList)){
         return "Found me!"
    } else 
    return "Haven't found me"
}

console.log(findingPeople("Cristiane")) // prints: Found me!

