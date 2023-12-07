let score = "33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1, false => 0
*/

let isLoggedIn = 1

let valueInBoolean = Boolean(isLoggedIn)
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

/*
1 => true, 0 => false
"" => false
"Shikha" => true
*/

let someNumber = 33

let valueInString = String(someNumber)
console.log(typeof valueInString);
console.log(valueInString);


// ************** Operations ****************************
let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello"
let str2 = " World!"

let str3 = str1 + str2
console.log(str3)
// Below examples are malpractices --> use parenthesis instead
console.log("1" + 2)        //12
console.log(1 + "2")        //12
console.log("1" + 2 + 2)    //122
console.log(1 + 2 + "2")    //32
console.log(+true)          //1
console.log(+"")            //0
console.log(true)           //true  

