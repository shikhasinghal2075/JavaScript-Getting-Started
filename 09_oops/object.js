// Function is a function but also an object
function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));            //25
console.log(multiplyBy5.power);         //2
console.log(multiplyBy5.prototype)      //[]

function craeteUser(username, score){
    this.username = username
    this.score = score
}

// We can inject any property to a function'
craeteUser.prototype.increment = function(){
    this.score++;       // will cahnge value of current object
}

craeteUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

const chai = new craeteUser("chai",25)
const tea = new craeteUser("tea",250)

chai.printMe()