function numbers (num1, num2){
    return num1 + num2;
}

// The function it get the num1 and add numb2 

const randomNumbers = numbers(5, 10)

console.log(randomNumbers)

/*  What's the difference between a return and console.log?
    
    -  A return statement ends the execution of a function, and returns control to the calling function. 
    Execution resumes in the calling function at the point immediately following the call. 
    A return statement can return a value to the calling function.
    -  console.log - prints the result on the screen

    When would you choose to use functions over the way we have been scripting so far?

    -We choose the functions ( is a kind of block of codes)when we need to execute it repetitive times, so we do not need to write every single line and let the function do the job after giving it the correcter parameters.

*/