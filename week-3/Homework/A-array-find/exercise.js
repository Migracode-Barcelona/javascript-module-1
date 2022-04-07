/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

// function isLongNameStartingWithA(name){
//   return isLongName(name) && startsWithA(name)
// }

function isLongNameStartingWithA(name){
return name[0] ==="A" && name.length > 7

}

function findLongNameThatStartsWithA(names){
  return names.find( name => isLongNameStartingWithA(name))
}

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra" 
