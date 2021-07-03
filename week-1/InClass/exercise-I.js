function getAgeInMonths(age) {
    return age * 12
}

function createGreeting(name, age) {
    const ageInMonths = getAgeInMonths(age);
    const message = "Hello world" + " " + name + " " + "was born over" + " " + ageInMonths + " " + "months ago !";
    return message; 
}

console.log(createGreeting("Alex", 25));