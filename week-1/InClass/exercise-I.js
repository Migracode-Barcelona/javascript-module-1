function age(thisYears, yearsOld){
    return thisYears - yearsOld;
}

const myBirthYear = age(2022, 34);
console.log(myBirthYear); // prints 1988


// function createGreeting(name, year) {
//     let nascimento = age(34);
//     let message = "Hello " + name + " You've born in " + nascimento + ".";
//     return message;
// }

// let helloMessage = createGreeting(Cristiane, 1987)

// console.log(helloMessage);

// function greetings(name, year){
//     let ageinYears = age(2022, 34);
//     let message = " My name is $(name) and I was born in $(age).";
//     return message;
// }

// let helloGreetings = greetings("cristiane", 1987);
// console.log(greetings);