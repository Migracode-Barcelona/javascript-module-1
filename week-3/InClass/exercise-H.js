/*

Exercise H (10 mins)
Create a function which:
Takes an array of names
Looks to see if your name is in the array
If it is, return Found me!; if not, return Haven't found me :(

*/

const nameList = ["Cristiane", "Joana", "Carmem" , "Maria", "Ana"];


  function findingPeople(person){
    if (person === "Cristiane") // boolean
    return "Found me!"
    else 
    return "Haven't found me"

}


console.log(findingPeople("Cristiane"))


/* All the other tries I got stuck:


function findingPeople(person){
    if (person == nameList ){
    return "Found Me!"
    }
    else return "Haven't found me"
}

const findingCris = nameList.find(findingPeople)

console.log(findingPeople("Cristiane"))




function findingPeople(person) {
    if (person == nameList.find("Cristiane")){
        return "Found me!"
    } else {
        return "Haven't found me"
    }
}

console.log(findingPeople("Cristiane"));


*/