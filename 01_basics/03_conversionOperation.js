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
console.log(typeof valueInString)
console.log(valueInString)