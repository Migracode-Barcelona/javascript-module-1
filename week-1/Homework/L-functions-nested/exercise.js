var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function toUpper(phrase) {
    var upperCased = phrase.toUpperCase();
    return upperCased;
}
function greetingFcn(name, greetingStart) {
   // var greeting = greetingStart + " " + name;
    var greeting = `${greetingStart} ${name}`;

  //  var upperGreeting = toUpper(greeting);   
    
 //   return upperGreeting;
    return toUpper(greeting);
} 
var greetingStart = "hello";

console.log(greetingFcn(mentor1, greetingStart));
console.log(greetingFcn(mentor2, greetingStart));
console.log(greetingFcn(mentor3, greetingStart));
console.log(greetingFcn(mentor4, greetingStart));
console.log(greetingFcn(mentor5, greetingStart));



