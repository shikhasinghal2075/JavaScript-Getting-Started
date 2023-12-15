const user = {
    username: "Shikha",
    loginCount: 5,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Got user details from database: username is ${this.username}`);
        console.log(this)
    }
    
}
    
    console.log(user.username);
    console.log(user.getUserDetails());
    
    // Constructor function --> gives a new copy
    // const promise = new Promise()
    function User(username, loginCount, isLoggedIn){
        // Right side variable is passes variable
        this.username = username
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
    
        this.greetings = function(){
            console.log(`Welcome ${this.username}`)
        }
    
        return this;
    }
    
    const userOne = new User("Shikha",12,true)
    const userTwo = new User("Chai aur code",12,true)
    console.log(userOne)
    console.log(userTwo)
    
    // Constructor property is reference
    console.log(userOne.constructor)
    
    // Prototype
    