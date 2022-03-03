function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker("name"))


/*
Can you explain what this function does line by line? 
  What happens when you pass in a string?

  LINE 1   <---- Start: giving a name to a function (numberChecker) and adding a parameter to this namefunction (num);

  LINE 2   <---- If the parameter (num) is greater than 20,

  LINE 3   <----- it will return the message: (num) is greater than 20;

  LINE 4   <----- Else if the parameter (num) is equal type and value than 20,

  LINE 5   <----- it will return the message: (num)is greater than 20;

  LINE 6   <----- Else if the parameter (num) is less than 20,

  LINE 7   <----- it will return the message: (num)is less than 20;

  LINE 8   <----- Else  the parameter (num) isnot a number ( string, object, etc),

  LINE 9   <----- it will return the message: (num)is not even a number :'(;

  LINE 11  <----- End of the funcion.

   LINE 13  <----- We print to the console throught the command console.log, calling the funcion inside the parentheses.
              inserting as an argument what we need to know it matches with one of the conditions of the function.

              As a result checked on Node REPL, it prints
 
  
 



*/

