/*
Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation”

*/

const mathematics=(x,y,operation)=>{
const result= operation(x,y);
console.log(result);
}

const add=(x,y)=>x+y;
const sub=(x,y)=>x-y;
const multiply=(x,y)=>x*y;
const divide=(x,y)=>x/y;

mathematics(10,3,add)