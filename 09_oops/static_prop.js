class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    // when we don't want to give access of something we add static keyword
    static createId(){
        return `232`
    }
}

const chai = new user("Chai")
// console.log(chai.createId())

// Similarly will not be accessible to child class also
class Teacher extends user{
    constructor(username, email ){
        super(username)
        this.email = email
    }
}
