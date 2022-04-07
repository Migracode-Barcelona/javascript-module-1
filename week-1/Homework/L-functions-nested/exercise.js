const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

function mentors(mentor){
    const nameInUpperCase = mentor.toUpperCase();
    return nameInUpperCase;
}
// segunda parte del ejercicio:

function shoutingOutLoud (mentor){
    return `HELLO ${mentor.toUpperCase()}`
}

console.log(shoutingOutLoud(mentor1)); 
console.log(shoutingOutLoud(mentor2)); 
console.log(shoutingOutLoud(mentor3)); 
console.log(shoutingOutLoud(mentor4)); 
console.log(shoutingOutLoud(mentor5)); 

/* prints: 
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
*/

