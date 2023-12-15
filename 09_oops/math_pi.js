
// In this value of pi cannot be changed
console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)


const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi banegi")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// name property is not printed as enumerable is set to false
for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}