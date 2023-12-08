// Javascript arrays are resizable
// Array makes shallow copy and not deep copy
const myArr = [0,1,2,6,7,3,4]
console.log(myArr[4])       //7

// Array as object
const myArr2 = new Array(1,2,1,5)
console.log(myArr2[0])       //1
//Array methods
myArr2.push(6)
myArr2.push(8)
myArr2.pop()
myArr2.unshift(9)       
console.log(myArr2)     //[ 9, 1, 2, 1, 5, 6 ]

console.log(myArr2.includes(9))     //true
console.log(myArr2.indexOf(9))      //0

const newArr = myArr2.join()
console.log(newArr)         //9,1,2,1,5,6
console.log(typeof newArr)  //string

// slice, splice
console.log("A ", myArr2);      //A  9,1,2,1,5,6

const myn1 = myArr2.slice(1,3)
console.log(myn1)               //[ 1, 2 ]
console.log("B ", myArr2);      // B  [ 9, 1, 2, 1, 5, 6 ]

// splice modifies original array and includes range
const myn2 = myArr2.splice(1,3)
console.log(myn2)               //[ 1, 2, 1 ]
console.log("C ", myArr2);      //C  [ 9, 5, 6 ]

let marvel_heros = ["thor","ironman","spiderman"]
let dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)     //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros)   

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)      //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]   

// Other than concatinate, we can do: spreading
const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros)  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Shikha"))    //false
console.log(Array.from("Shikha"))       //[ 'S', 'h', 'i', 'k', 'h', 'a' ]
console.log(Array.from({name: "Shikha"})) //[]

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))   //[ 100, 200, 300 ]