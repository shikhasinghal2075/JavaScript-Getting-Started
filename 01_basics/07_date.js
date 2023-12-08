// Dates
let date = new Date()
console.log(date.toString());  //Fri Dec 08 2023 06:34:13 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString());       //Fri Dec 08 2023
console.log(date.toLocaleString());     //12/8/2023, 6:36:35 AM
console.log(typeof date)    //object

// Months starts with 0 in javascript
let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());      //Mon Jan 23 2023

let myCreateDate1 = new Date(2023,0,23, 5, 3)
console.log(myCreateDate1.toLocaleString());     //1/23/2023, 5:03:00 AM

let myCreateDate2 = new Date("2023-01-14")
console.log(myCreateDate2.toLocaleString());     //1/14/2023, 12:00:00 AM

// Returns milli seconds from first date
let myTimestamp = Date.now()        
console.log(myTimestamp)    //1702018229060 
console.log(Math.floor((Date.now()/1000)))      //1702018320

let newDate = new Date()
console.log(newDate)                //2023-12-08T08:29:34.875Z
console.log(newDate.getMonth() + 1)     //12
console.log(newDate.getDay())       //5

newDate.toLocaleString('default',{
    weekday: "long"
}
)