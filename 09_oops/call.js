function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    // SetUsernam(username)        // It is calling setUsername function but reference is not getting hold
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "test@gmail.com","1234")
console.log(chai)