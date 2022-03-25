/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// solution 1


arr.forEach(function (element) {
  
  if (element % 3 === 0 && element % 5 === 0) {
     console.log("FizzBuzz");
  } else if (element % 5 === 0) {
     console.log("Buzz");
  } else if(element % 3 === 0) {
    console.log("Fizz");
  } else {
     console.log(element);
  }
});


// function solutionTwo(element) {
  
//   if (element % 3 === 0 && element % 5 === 0) {
//       console.log("FizzBuzz");
//       return
//   } 
//   if (element % 5 === 0) {
//      console.log("Buzz");
//       return
//   } 
//   if(element % 3 === 0) {
//    console.log("Fizz");
//       return
//   } 
//     console.log(element);
  
// };

// arr.forEach(solutionTwo)


// return - "stop the execution of the function // sinonimus of exit -  go out of the function"

// return - IF Theres any expression after >> it will give me undefined

// if I want to save the result of the function, I can put this on a variable 

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/


