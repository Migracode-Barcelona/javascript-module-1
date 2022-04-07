const year = 2022 // global variable

function returnBornDate(yearsOld){
    return year - yearsOld;
}

console.log(returnBornDate(34)); // prints 1988

//Second part of the excercise:

function greetings(name, age){
    return ` Hello, my name is ${name} and I've born in ${returnBornDate(age)}.`
// };
}

console.log(greetings("Cristiane", 34)); // prints: Hello, my name is Cristiane and I've born in 1988.


