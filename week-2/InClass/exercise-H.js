// function exponential(number) {
//   return number * number;
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// 

function exponential(number) {
  return number * number; // o number **2
}

function isEven(number) {
  return number % 2 === 0;
}

// for (let i = 5; i < 20; i++){
//     console.log(`The exponential of ${isEven()} is ${exponential()}`)
//     isEven = isEven + 2;
// }

for ( let number = 5; number < 20; number++ ) { // o 20 < number 
  if (isEven(number)){
      console.log(`The exponencial of ${number} is ${exponential(number)}`);


  }
}

/*
Prints

The exponencial of 6 is 36
The exponencial of 8 is 64
The exponencial of 10 is 100
The exponencial of 12 is 144
The exponencial of 14 is 196
The exponencial of 16 is 256
The exponencial of 18 is 324

*/