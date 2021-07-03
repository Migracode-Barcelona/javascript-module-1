function greetingFcn(name, greetingStart) {
    const greeting = greetingStart + name;
    console.log(greeting);
}
greetingFcn("Suman", "Hello my name is");


//Function Defination
function greetingFcn(name, greetingStart) {
    const greeting = greetingStart + " " + name;
    return greeting; 
}
// Function Invocation
const resultGreeting = greetingFcn("Suman", "Hello! my name is");
console.log(resultGreeting);
