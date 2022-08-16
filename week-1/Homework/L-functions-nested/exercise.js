var mentor1 = "Lucia";
var mentor2 = "Giorgio";
var mentor3 = "Fred";
var mentor4 = "Ananda";
var mentor5 = "Ali";

function upperCase(name) {
    return name.toUpperCase();
    
}

// let mentorUpper = upperCase(mentor1);
// console.log(mentorUpper);


function greeting(mentor){
    let mentorUpper = upperCase(mentor);
    console.log(`HELLO ${mentorUpper}`);
    // return `HELLO ${mentorUpper}`
}

// let hello = greeting(mentor1)
// console.log(hello);

greeting(mentor1);
greeting(mentor2);
greeting(mentor3);
greeting(mentor4);
greeting(mentor5);
