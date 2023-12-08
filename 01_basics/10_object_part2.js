// const appUser = new Object() //singleton object

// Non singleton object
const appUser = {}

appUser.id="123abc"
appUser.name="Shikha"
appUser.isLoggedIn=true

console.log(appUser)    //{ id: '123abc', name: 'Shikha', isLoggedIn: true }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Shikha",
            lastname: "Singhal"
        }
    }
}

console.log(regularUser.fullname)   //{ userFullName: { firstname: 'Shikha', lastname: 'Singhal' } }
console.log(regularUser.fullname.userFullName.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1,obj2}
console.log(obj3)       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//Object.assign(target,source)
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1,...obj2}
console.log(obj5)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
       id: 1,
       email: "test@gmail.com" 
    },
    {
        id: 2,
        email: "test1@gmail.com" 
     },
     {
        id: 3,
        email: "test3@gmail.com" 
     }
]

users[1].email

console.log(Object.keys(appUser))       //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(appUser))     //[ '123abc', 'Shikha', true ]
console.log(Object.entries(appUser))    //[ [ 'id', '123abc' ], [ 'name', 'Shikha' ], [ 'isLoggedIn', true ] ]
console.log(appUser.hasOwnProperty('isLogged'))   //false


// Destructuring of object
const course = {
    name: 'js',
    price: 999,
    courseInstructor: "Shikha"
}

// Extract courseInstructor value from course object
const {courseInstructor} = course
console.log(courseInstructor)       //Shikha
// OR if you want to give smaller name
const {courseInstructor : instructor} = course
console.log(instructor)             //Shikha

// const navbar = () => {

// }

// navbar(company = "shikha")

// //JSON Example
// {
//     "name": "shikha",
//     "coursename": "mathematics",
//     "price": "free"
// }




