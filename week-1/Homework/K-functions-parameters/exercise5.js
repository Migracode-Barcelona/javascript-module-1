// Declare your function here

function createGreeting(name, age) {
    var age = getAge(age);
    var message =
      "Hello my Name is " + name + " and I'm " + ageInDays + " days ago!";
    return message;
  }

const greeting = createLongGreeting("Daniel");

console.log(greeting);






function createCreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }