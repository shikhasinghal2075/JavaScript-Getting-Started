// Create a promise : Approach 1
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task eg: 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is complete')
        // To connect it with then(), resolve needs to be called
        resolve()
    },1000)
})

// Consume a promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

// Create a promise : Approach 2 --> automatically consumed in single step
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed")
})


// Data can be passed through resolve --> Object is passes here
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Shikha", email:"test123@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// Added reject code, to catch error and what to do after then and finally
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Shikha",password:"1234"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// Handling promise using async await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"12345"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

// consume promiseFive
// async await cannot directly handle errors --> use try and catch
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// Approach-1 --> getAllUsers using async await
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        // JSON parsing will time, so need to be awaited
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("Error: ",error)
    }
}

getAllUsers()

// Approach-2 --> getAllUsers
fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json();
}).then((data) => console.log(data))
.catch((error) => console.log(error))