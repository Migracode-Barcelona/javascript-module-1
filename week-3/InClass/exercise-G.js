/*

Create a function which:
Takes an array of birthYears
Uses console.log to print the message 
These are the birth years of people who can drive: <filtered birth years>
Returns an array of people who can drive (remember, you can drive if you are 17 years or older)

*/

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function whoCanDrive(birthYear){
    return birthYear <= 2005;  
}

const canDrive = birthYears.filter(whoCanDrive)

console.log(`These are the birth years of people who can drive ${canDrive}`);


//prints:

// These are the birth years of people who can drive 1964,1999,2005,1978,1985,1919
