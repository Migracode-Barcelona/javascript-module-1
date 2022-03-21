/*

You can drive in the UK at the age of 17.

Write another function that takes a birth year and returns a string Born in {year}
 can drive or Born in {year} can drive in {x} years

Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ],
 to get an array of strings saying if these people can drive

console.log the answers


*/

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// const ages = birthYears.map(function (birthYear){
//     const year = 2022;
//     const yearsOld = year - birthYear;
//     return yearsOld

// })

// solucion 1 cris:

// const dLicense = birthYears.map(function (driver){
//     const year = 2022;
//     const yearsOld = year - driver;
//     const legalDriver = yearsOld >= 17;
//     const waitingPermition = yearsOld < 17;
//     const yearsWaiting = 17 - yearsOld;
//     if (driver === legalDriver){
//         console.log( `Born in ${birthYears.length()} can drive`)
//     } else ( driver === waitingPermition)
//         console.log(`Born in ${birthYears} can drive in ${yearsWaiting} years`)
//     });



// Prints:

/*
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in -41 years
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in 3 years
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in -6 years
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in 0 years
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in -27 years
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in -20 years
Born in 1964,2008,1999,2005,1978,1985,1919 can drive in -86 years

*/


const dLicense = birthYears.map(function (driver){
    const year = 2022;
    const yearsOld = year - driver;
    const legalDriver = yearsOld >= 17;
    const waitingPermition = yearsOld < 17;
    const yearsWaiting = 17 - yearsOld;
    if ( driver == waitingPermition){
         console.log(`Born in ${birthYears.length} can drive in ${yearsWaiting} years`)
    } else (driver == legalDriver) 
        console.log( `Born in ${birthYears.length} can drive`)
       
    });


  
// PEDI AYUDA AL PROFESOR ALEJANDRO


