
/*

Create a function that takes a birthYear, and returns the age of someone
You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. 
Take this array and create another array containing their ages.
console.log the birth years array

*/

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const ages = birthYears.map(function (birthYear){
    const year = 2022;
    const yearsOld = year - birthYear;
    return yearsOld

})

console.log(ages)

/*  RESULT 
[
  58, 14,  23, 17,
  44, 37, 103
]

*/
