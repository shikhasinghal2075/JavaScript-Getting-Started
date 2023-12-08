const score = 400
console.log(score)          //400

const balance = new Number(100)
console.log(balance)        //[Number: 100]

console.log(balance.toString().length);  //3
console.log(balance.toFixed(2));         //100.00

const otherNumber = 23.8966
// Precision includes numbers both before and after decimal
console.log(otherNumber.toPrecision(3))  //23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));      //10,00,000


// *************** Maths *******************
console.log(Math);
console.log(Math.abs(-4));      //4
console.log(Math.abs(4));       //4
console.log(Math.round(6.4));   //6
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.9));   //4
console.log(Math.min(4, 9, 0 ,1));   //0
console.log(Math.max(4, 9, 0 ,1));   //9

// Math.random() will always give random values between 0-1
console.log(Math.random())
console.log(Math.random()*10 + 1)

// To get random number in specified range
const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max-min+1)) + min))
