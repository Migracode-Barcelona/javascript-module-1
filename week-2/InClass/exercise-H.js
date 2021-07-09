function exponential(number) {
  return number * number;
}

function isEven(number) {
  for(let i = 5; i <= number; i++) {
    if (i % 2 == 0) {
      let exponentialNumber = exponential(i);
      console.log("The exponential of " + i + "is " + exponentialNumber);
    }
  }
}
// not completed



