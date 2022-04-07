const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];

console.log( fruits[2])
console.log( fruits[3])
console.log( fruits[5])
console.log( fruits[0])
console.log( fruits[2])

/* prints: 

strawberry
kiwi
orange
banana
strawberry

*/

fruits[1] = "rapberry"
fruits[4] = " pineapple"

console.log(fruits);

/* it prints:

[ 'banana', 'rapberry', 'strawberry', 'kiwi', ' pineapple', 'orange' ]

*/