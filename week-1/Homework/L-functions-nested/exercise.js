var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uperCaseName (mentor){
    return `Hello ${mentor.toUpperCase()}`
}

var greetings = uperCaseName();

 /*If I call thr function, it will prints:
Hello DANIEL
 Hello IRINA
 Hello MIMI
 Hello ROB
 Hello YOHANNES */

 //Second function


let shoutingOutLoud = greetings.toUpperCase();

function uperCaseName (mentor){
    return `Hello ${mentor1.toUpperCase()}
Hello ${mentor2.toUpperCase()}
Hello ${mentor3.toUpperCase()}
Hello ${mentor4.toUpperCase()}
Hello ${mentor5.toUpperCase()}`
}
console.log(shoutingOutLoud); 

/* prints: 
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
*/

