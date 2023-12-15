let myName = "Shikha    "
console.log(myName.length);     // 10

// We are required to find true len without using trim
let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// Inject something in object itself to make it accessible to all
Object.prototype.customFunc = function(){
    console.log("Custom function called");
}


heroPower.customFunc()
myHeros.customFunc()

// Inject custom function just to array
Array.prototype.customFunc2 = function(){
    console.log("Custom function 2 called");
}

// heroPower.customFunc2() // It does not have access to customFunc2 as it given only to array
myHeros.customFunc2()

// console.log(myName.trueLength);   


//Inheritence : two ways to inherit

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

TeachingSupport.__proto__ = Teacher

//OR use modern syntax
// Object.setPrototypeOf{TeachingSupport, Teacher};

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Shikha".trueLength()