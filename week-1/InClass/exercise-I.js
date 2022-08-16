function calculateYear(name, age){
    let calculate = 2022 - age;
    console.log(calculate);
   return `${name}, you were born in ${calculate}.`; 
}

let year = calculateYear("Maria", 33);

console.log(year);
console.log(calculateYear("Joao", 40));