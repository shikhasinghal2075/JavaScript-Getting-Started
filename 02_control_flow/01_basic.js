// Below line will print executed as it will check only value and not compare datatype
if(2 == "2"){
    console.log("executed");
}

// To compare datatype as well as value, use === and !==
if(2 === "2"){
    console.log("executed");
}
else{
    console.log("Not executed")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined --> what value to be assigned if something returns null OR undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);      //5

let val2;
val2 = null ?? 10
console.log(val2)   //10


let val3;
val3 = undefined ?? 10
console.log(val3)   //10

let val4;
val4 = undefined ?? 10 ?? 20
console.log(val4)   //10 (Will return first non-null value)

// Ternary Operator: condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")  //more than 80

