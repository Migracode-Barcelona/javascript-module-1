/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;
let nums=[1,2,3,4,5,6,7,8,9,10];




function sumTillNum(num){
	n=10;
let sum=0
for(var i=0; i<n;i++){
    
    
    sum=sum+nums[i];
	
    
    
   console.log(i,sum)
   
}
	
	

	

		
		
	//your code here
}
 
//console.log(i);
console.log("Sum from 0 to " + n + " is: " + sumTillNum());
