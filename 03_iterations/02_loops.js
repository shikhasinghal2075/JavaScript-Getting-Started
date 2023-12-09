const myarr = [1,2,3,4,5,6]
for (const num of myarr) {
    console.log(num)    
}

const myCoding = [
    {
        language : "lang1",
        fileName : "file1"
    },
    {
        language : "lang2",
        fileName : "file2"
    },
    {
        language : "lang3",
        fileName : "file3"
    },
]

myCoding.forEach((item) => {
    console.log(item.language)
})

// const coding = ["js","cpp","c"]
// const values = coding.forEach((item) => {
//     return item;
// })

// console.log(values)

const myNums = [1,2,4,5,0,8,9,4]
const newNums = myNums.filter((num) => num>4)
console.log(newNums)        //[ 5, 8, 9 ]

// OR

const newNums2 = []
myNums.forEach((num) => {
    if(num > 4){
        newNums2.push(num)
    }
})
console.log(newNums2)        //[ 5, 8, 9 ]

const newNums3 = myNums.map((num) => num+10)
console.log(newNums3)

// chaining --> use 2 or more methods together --> result of first gets passed on to second method
const newNums4 = myNums.map((num) => num+10).map((num) => num+1).filter((num) => num >= 4)
console.log(newNums4)

