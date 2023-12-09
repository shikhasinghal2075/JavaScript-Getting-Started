const user = {
    username: "Shikha",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website!`)

        console.log(this)
    }
}

user.welcomeMessage()       //shikha, welcome to the website!
user.username = "Test"
user.welcomeMessage()

function chai(){
    let username = "shikha"
    //this cannot be used inside function
    console.log(this)
}

chai()

// Arrow function
const addTwoNumbers = (num1,num2) => {
    return (num1+num2)
}
// you can write above function as for single line function
const addTwoNumbersAnotherWay = (num1,num2) => (num1+num2)

console.log(addTwoNumbersAnotherWay(3,4))         //7

const myArray = [2,5,6,7,8,3]
myArray.forEach(function () {})
myArray.forEach(() => {})
