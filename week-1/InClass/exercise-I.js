function calculateYear(age){
    let calculate = 2022 - age;
    console.log(calculate);
   return `You were born in ${calculate}.`; 
}

let year = calculateYear(33);

console.log(year);