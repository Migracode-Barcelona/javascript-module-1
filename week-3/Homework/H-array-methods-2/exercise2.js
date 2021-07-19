/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/


function capitalise(str) {
 var strspl=str.split("")

var strsplup= strspl[0].toUpperCase(0);

 return strsplup+strspl.join("").slice(1)


 

}


/* 
  DO NOT EDIT BELOW THIS LINE

  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
