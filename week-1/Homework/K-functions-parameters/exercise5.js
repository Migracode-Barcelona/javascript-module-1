// Declare your function here
function createLongGreeting(name,age){
    var message=` hello my name is ${name} and i am ${age} years old.`
    return message
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
