function exerciseH(num1, num2) {
    let string = "The correct";
    return `${string} sum of two numbers is: ${num1 + num2}`;
}
// I created a function that receive two number and do a operation. And I created a variavle inside my function who has a string. Then I concatanate the string and operation to return. 


let result = exerciseH(5,10);
// To read my function's return, I had to store this value on ohter variable (result). Then, to see on console, I used console.log(result). 

console.log(result);

// the diference between console.log and return is the console.log show the result without store this value on variable. But if I want use this result in another part of my code, I have to use "return". 
