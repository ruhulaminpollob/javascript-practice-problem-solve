/*
1) If I write []==true,will it show true or false? Check it out.
*/
const arr=[];

if (arr==true) {
    console.log('its true');
}else{
    console.log('its false');
}

/*
2) Use === to check if the true === "true" gives true or false.
*/
const first=true;
const second='true';
if (first===second) {
    console.log('its true');
} else {
    console.log('its false');
}

//false

/*
3) Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false.

*/

const isNumber=x=>!isNaN(x)

console.log(isNumber('344'));


