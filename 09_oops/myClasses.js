// ES6

// Approach 1
class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Getter and setter
    get username(){
        return this._username;
    }

    set username(value){
        this._username = value;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password;
    }

    set password(value){
        this._password = value;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const chai = new User("Chai","test@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scene --> Approach-2
function User(username,email,password){
    this.email = email;
    this.username = username;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea","test@gmail.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// Behind the scenes of getter/setter
function User(username,email,password){
    this._email = email;
    this._username = username;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email;
        },
        set: function(value){
            this.email = value
        }
    })
}