var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// a and b are not part of this scope
// console.log(a);
// console.log(b);
// it will be printed
console.log(c);     //30

let array = [2,3,8,5]

for(let i=0; i<Array.length;i++){
    const element = array[i];
}
