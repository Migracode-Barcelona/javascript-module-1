

/* Modify your callback function from the previous exercise so that it also:
sorts  namesArray in alphabetical order */

function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
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
  return result.sort();
}

console.log(magician(manipulateArray))


//Prints:

//I am magician! Watch as I mutate an array of strings to your heart's content!
//[ 'ANTIGONI', 'CHRIS', 'ELAMIN', 'ISMAEL', 'JAMES', 'SANYIA' ]
