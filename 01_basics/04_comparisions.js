
// unpredictable outputs --> Not recommended
console.log("2" > 1)    // true
console.log("02" > 1)   // true

console.log(null > 0)    // false
console.log(null == 0)    // false
console.log(null >= 0)    // true


// We have strict check (===) --> Not only checks values but also data type
