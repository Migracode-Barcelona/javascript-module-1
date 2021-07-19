function numberChecker(num) {
  if (num > 20) {    // the number should be greater than 20.
    return `${num} is greater than 20`; //If the above statement is true than this string will show as a result.
  } else if (num === 20) { // if first statement is not true and has equal value and equal type with 20, 
    return `${num} is equal to 20`; // so, if 2nd line statement is true than this sting will display.
  } else if (num < 20) { // if both statement is not true than another statement which is less than 20
    return `${num} is less than 20`;// if the 3rd line statement is true than this string will display as result.
  } else { // if non of the above statement is true then this final statement will run.
    return `${num} isn't even a number :(`; 
  }
}
console.log(numberChecker(24));