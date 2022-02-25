function age(thisYears, yearsOld){
    return thisYears - yearsOld;
}

const myBirthYear = age(2022, 34);
console.log(myBirthYear); // prints 1988

// Second part of the excercise:

function greetings(name, year){
    return message = ` Hello, my name is ${name} and I've born in ${year}.`
};

let greetingsFromBarcelona = greetings("Cristiane", myBirthYear);

console.log(greetingsFromBarcelona); // prints: Hello, my name is Cristiane and I've born in 1988.
