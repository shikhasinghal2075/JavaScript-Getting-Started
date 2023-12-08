// singleton
// Object.create

// object literals
const mySymbol = Symbol("key1")
const jsUser = {
    name: "Shikha",
    "surname":"Singhal",
    age: 25,
    location: "Chandigarh",
    email: "test@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySymbol] : "key1"
}

console.log(jsUser.email)       //test@gmail.com
console.log(jsUser["email"])    //test@gmail.com
console.log(jsUser["surname"])  //Singhal
console.log(jsUser[mySymbol])   //key1
console.log(typeof jsUser[mySymbol])   //

jsUser.email = "test3@gmail.com"
// Object.freeze(jsUser)
console.log(jsUser)
jsUser.email = "test4@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")        //Hello JS user
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)        //Hello JS user
}

console.log(jsUser.greeting())