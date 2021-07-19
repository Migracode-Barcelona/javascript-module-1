/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function validatePasswords(passwords) {
const isLongerThan5 = (password) => password.length >= 5;
const existsUpperCase = (passwordArray) => passwordArray.some((char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90); 
const existsLoweCase = (passwordArray) => passwordArray.some((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
const leastOneNumber = (passwordArray) => passwordArray.some((char) => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);
const nonAlphanumericSymbol = (passwordArray) => passwordArray.some((char) => char.charCodeAt(0) === 33 || 
                                                                              char.charCodeAt(0) === 35 ||
                                                                              char.charCodeAt(0) === 36 ||
                                                                              char.charCodeAt(0) === 37 ||
                                                                              char.charCodeAt(0) === 46 ||
                                                                              char.charCodeAt(0) === 42 ||
                                                                              char.charCodeAt(0) === 38 
);
return passwords.map((password) => {
  const splittedPassword = password.split("");
  return isLongerThan5(password) && existsUpperCase(splittedPassword) && existsLoweCase(splittedPassword) && leastOneNumber(splittedPassword) && nonAlphanumericSymbol(splittedPassword);
});
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, true]
);
