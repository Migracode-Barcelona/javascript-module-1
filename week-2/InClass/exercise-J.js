
/*

Complete this function so that, 
if the second index in the array contains the name "Amy",
 it returns "Second index matched!"

*/

const people = ["Cristiane", "Juliana", "Amy", "Jorge", "Luis"]

function secondMatchesAmy(array) {
  if ( array[2] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}
 console.log(secondMatchesAmy(people));

 // printa:   Second index matched!