const birthYearOfPeople = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

function canDrive(year) {  
        let ages = 2021 - year;
         return ages >= 17;
}
const peopleCanDrive = birthYearOfPeople.filter(canDrive);

console.log(`These are the birth years of people who can drive: ${peopleCanDrive}`);



