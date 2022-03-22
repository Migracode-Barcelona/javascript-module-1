/*

You can drive in the UK at the age of 17.

Write another function that takes a birth year and returns a string Born in {year}
 can drive or Born in {year} can drive in {x} years

Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ],
 to get an array of strings saying if these people can drive

console.log the answers


*/

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];


const dLicense = birthYears.map(function (birthYear){
    const year = 2022; // number
    const yearsOld = year - birthYear; // number
    const yearsWaiting = 17 - yearsOld; // number
     if ( yearsOld < 17){
         console.log(`Born in ${birthYear} can drive in ${yearsWaiting} years`)
    } else if( yearsOld >= 17) 
        console.log( `Born in ${birthYear} can drive`)
    });



//PRINTS:

/*

Born in 1964 can drive
Born in 2008 can drive in 3 years
Born in 1999 can drive
Born in 2005 can drive
Born in 1978 can drive
Born in 1985 can drive
Born in 1919 can drive

*/