// Array specific loops

//for of : itself determines length , starting and other elements
//["","",""]
//[{},{},{}]
const arr = [1,2,5,7,8,9]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const singleChar of greetings) {
    console.log(singleChar);
}

// Maps
const map = new Map()
map.set('IN','India')
map.set('IN','India')
map.set('USA','United State of America')
map.set('EUR','Europe')
for (const [key,value] of map) {
    console.log(key,':-',value);
}

// Object iterations do not work like this
// const myObject = {
//     'game1':'Mario',
//     'game2':'GTA'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }

//for in loop
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
}

const lang = ["js","cpp","c","rb","py"]

for (const key in lang) {
    console.log(lang[key]);
}

//for each loop
lang.forEach(function (item){
    console.log(`${item} is a progamming language`)
})

// coding.forEach((item) => {
//     console.log(`${item} is a progamming language`)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

const myarr = [1,2,3,4,5,6]
for (const num of myarr) {
    console.log(num)    
}

