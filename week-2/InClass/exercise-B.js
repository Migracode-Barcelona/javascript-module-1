function boolChecker(bool) {
  const boolChecker = 'boolean';

  if (typeof bool === bool) {
    return "You've given me a bool, thanks!";
  }
  return "No bool, not cool.";
}

console.log(boolChecker()); // prints : Not bool, not cool

/*
Node REPL:

1- In a node REPL, what is the typeof a true or false?
   The type of true and false are both 'boolean' - primitive type

*/

// FALTA CORRIGIR, ESTA DANDO ERRADO
