//Date start from 1970 january 1
//Date represents in millisecond

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.getTime())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log("To Local String: "+myDate.toLocaleString(
    'default',{
        weekday:"long"
    }
))

console.log(typeof myDate)

let arbitryDate = new Date(2023,0,9)//in js month start from 0 here its april
console.log(arbitryDate.toString())

let createdDate = new Date("01-14-2000")
console.log(createdDate)

let myTimeStamp = Date.now()
console.log("Time stamp: "+myTimeStamp.toString())
console.log(Math.floor(myTimeStamp/1000))


let demoDate = new Date()
console.log(demoDate.getMonth())
console.log(demoDate.getDate())
console.log(demoDate.getDay())