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

//1. if: test conditional if num > 20 and return string talkin about;
//2. else if: testing other conditional if num is equal in value and type;
// testing if number is menor than 20
// test if number is number