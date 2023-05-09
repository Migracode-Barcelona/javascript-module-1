function calculateYear(name, age){
    let calculate = 2022 - age;
   return `${name}, you were born in ${calculate}.`; 
}

// first option
let year = calculateYear("Maria", 33);
console.log(year);

// second option
console.log(calculateYear("Joao", 40));