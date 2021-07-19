var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
var greeting="hello" 

function upper(greeting){
    return greeting.toUpperCase();
}
//console.log(upper(greeting))

function bigup(name,greeting){
    var up= upper(greeting)
    return up+" " +name
    console.log(bigup)
}
console.log(bigup(mentor1,greeting));
console.log(bigup(mentor2,greeting));
console.log(bigup(mentor3,greeting));
console.log(bigup(mentor4,greeting));
console.log(bigup(mentor5,greeting));