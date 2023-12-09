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