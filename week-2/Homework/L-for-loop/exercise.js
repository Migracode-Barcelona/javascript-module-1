/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;

/*

function sumTillNum(num){
	//your code here
	let suma = []
	for (let counter = 0; counter <= num; counter++){
		suma.push(counter)
	}
	return suma.toString().replace(/,/g,"+")
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

// prints: Sum from 0 to 10 is: 0+1+2+3+4+5+6+7+8+9+10

*/

function sumTillNum(num){
	//your code here
	let suma = 0;
	for (let counter = 0; counter <= num; counter++){
		suma = suma + counter; // o suma += counter;
	}
	return suma
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

//prints: Sum from 0 to 10 is: 55