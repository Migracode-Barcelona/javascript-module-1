let arrayNames = ["Amanda","Amy","Maria","Jon",]

function secondMatchesAmy(arrayNames) {
  if (arrayNames[1]== "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(arrayNames));