/* Primitive datatype --> call by value
 7 types:
 - String
 - Number
 - Boolean
 - null
 - undefined
 - Symbol (To make a avlue unique)
 - BigInt (Big/scientific values)
*/

const score = 33
const scoreVal = 33.6
const isLoggedIn = true
const email = "test@gmail.com"
let variable = null
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)   // false

/* Non-Primitive/reference type
- Array
- Object
- Function
*/

// Array
const testArr = ["Apple", "Mango", "Grapes"];
let myObj = {
    name: "Shikha",
    age:  25
}

console.log(myObj)

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof variable);

//******************* Memory ******************

// Stack (Primitive) , Heap (Non-Primitive)
let myTest1 = "abc"

let myTest2 = myTest1
myTest2 = "change string"
console.log(myTest2)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "test@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

