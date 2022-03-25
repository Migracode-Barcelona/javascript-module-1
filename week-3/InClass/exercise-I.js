/*
Create a function which accepts an array of "messy" strings. Example:
[
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

This function should:
Remove all non-string entries
Change the strings to upper case, and add an exclamation mark to the end
If you're using the above example, you should expect to return an array with 2x ELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!

*/
 const messyElements = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];


const stringArray = messyElements.forEach( function organizingElements(element){
  if (typeof element === 'string'){
    console.log(element.toLocaleUpperCase() + '!')
  } })
 
//  printa :
// ISMAEL!
// SANYIA!
// JAMES!
// ELAMIN!
// ISMAEL!
// ELAMIN!



