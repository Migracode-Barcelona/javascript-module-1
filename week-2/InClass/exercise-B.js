function boolChecker(bool) {

  if (typeof bool === "boolean") {
    return "You've given me a bool, thanks!";
  }
  return "No bool, not cool.";
}

console.log(boolChecker(true)); // prints : You've given me a bool, thanks!

/*
Node REPL:

1- In a node REPL, what is the typeof a true or false?
   The type of true and false are both 'boolean' - primitive type

1.1 - As a class, can you step through the function and explain what each line does?


LINE 1 <---- START: giving a name to a function  (boolChecker )and adding parameter to the name function (bool)

LINE 3 <---- IF the type of the parameter (bool) is exactly like a boolean ( primitive type that is both trye or false),

LINE 4 <---- it will return the message: You've given me a bool, thanks!

LINE 5 <----- IF the type of the parameter isnt a boolean ( can be number / string / objetc, etc),
             
LINE 6 <----- it will return : No bool, not cool.

LINE 7  <----- End of the funcion.


LINE 9 <----- We print to the console throught the command console.log, calling the funcion inside the parentheses.
              inserting as an argument after the name of the funcion inside another parentheses, one of the results of a boolean to confirm if match or now in our funcion.

              As a result checked on Node REPL, it prints

console.log(boolChecker(true)); // prints: You've given me a bool, thanks!


*/
