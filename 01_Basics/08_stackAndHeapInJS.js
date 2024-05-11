/*
there are two types of memory in js 
primitive use Stack
non-primitive use heap memory
*/ 

//for stack
let name = "dhruv"
let newname = name
console.log(name)//dhruv
console.log(newname)//dhruv
newname = "JMCOV"
console.log(name)//dhruv
console.log(newname)//JMCOV


//for primitive:they use reference
//here we use heap
let user ={
    userName : "Dhruv",
    userEmail: "dhruv@google.com"
}
console.log(user.userName)
console.log(user.userEmail)

let userChange = user
userChange.userName = "JMCOV"
userChange.userEmail = "jmcov@google.com"
console.log(userChange.userEmail)//jmcov@google.com
console.log(userChange.userName)//JMCOV

console.log(user.userName)//JMCOV
console.log(user.userEmail)//jmcov@google.com



