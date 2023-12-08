function sayMyName(){
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("K")
    console.log("H")
    console.log("A")
}

function add(number1, number2){
    // console.log(number1 + number2)
    return (number1+number2)
}

const result = add(3,4)

function loginUserMessage(message){
    if(message === undefined){
        console.log("Please enter a valid username")
        return
    }
    return `${message} just logged in!`
}
console.log(loginUserMessage("Shikha"))  //Shikha just logged in!

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600));       //[ 200, 400, 600 ]
// We use rest operator incase we pass more arguments i.e. ...num1 => rest operator

const user = {
    username: "Shikha",
    coursePrice: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and course price is ${anyObject.coursePrice}`)
}
handleObject(user)      //Username is Shikha and course price is 199

handleObject({
    username: "Shikha Singhal",
    coursePrice: 999
})   //Username is Shikha Singhal and course price is 999

const myNewArray = [200, 400, 100, 500]
function returnArrayElement(index){
    return myNewArray[index];
}
console.log(returnArrayElement(2));     //100