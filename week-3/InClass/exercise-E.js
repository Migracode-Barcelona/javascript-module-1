// const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// function birthYear(years) {
//       years.forEach((year) => {
//           let ages = 2021 - year;
//           console.log(ages);
          
//       });

// };
// console.log(birthYear(years));
const getAge = (birthYear) => 2021 - birthYear;
const birthYearOfPeople = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const peoplesAges = birthYearOfPeople.map(getAge);
console.log(peoplesAges);
