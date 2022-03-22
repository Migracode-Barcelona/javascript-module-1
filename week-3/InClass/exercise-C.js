

// I have a function defined below as:
// This function does not need to be modified. Can you pass in a callback function which will mutate namesArray such that it:
// Upper cases all letters in the array

function magician(yourFunc) {
  console.log("I am magician! Watch as I mutate an array of strings to your heart's content!");
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}

// const upperCaseNamesArray = function (yourFunc){ return namesArray.toUpperCase()}

/// 

function nametoUpperCase(person){
  return person.toUpperCase();
}

function manipulateArray(array){
  const result = []
  for (let i = 0; i < array.length; i++){
    const element = array[i];
    result.push(nametoUpperCase(element))
  }
  return result;
}

console.log(magician(manipulateArray))


/// It prints:

//I am magician! Watch as I mutate an array of strings to your heart's content!
//[ 'JAMES', 'ELAMIN', 'ISMAEL', 'SANYIA', 'CHRIS', 'ANTIGONI' ]




