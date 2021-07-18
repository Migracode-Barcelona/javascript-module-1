const birthYearOfPeople = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
function canDrive(years) {
    years.forEach((year) => {
        let ages = 2021 - year;
    if (ages >= 17) {
        console.log(`Born in ${year} can drive`);
    } 
        console.log(`Born in ${year} can not drive`);
    });    
}
console.log(canDrive(birthYearOfPeople));

