 let name = "Shikha"
 let age = 25

//  console.log(name + age + " :)");
 // Better way is use string interpolation as given below --> we can use methods along and it is a better way
console.log(`Hello my name is ${name} and my age is ${age}`);

// String is an object here
const gameName = new String('Mario')
console.log(gameName[0]);               //M
console.log(gameName.__proto__);        //{}
console.log(gameName.length);           //5
console.log(gameName.toUpperCase());    //MARIO
console.log(gameName.charAt(2));        //r
console.log(gameName.indexOf('o'));     //4

const newString = gameName.substring(0,3)
console.log(newString)                  //Mar

// We can use negative index with slice method
const anotherString = gameName.slice(-8,2)
console.log(anotherString)              //Ma

const newString1 = "   Shikha   "
// Trim all whitespaces
console.log(newString1.trim)            //Shikha

const url ="https://shikha.com/shikha%25singhal"
console.log(url.replace('%25','-'))     //https://shikha.com/shikha-singhal

// To find something is present in string or not
console.log(url.includes('://'))        //true

console.log(url.split('%'))             //[ 'https://shikha.com/shikha', '25singhal' ]
