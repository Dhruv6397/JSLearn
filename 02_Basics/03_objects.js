//singleton objects , when we make object through constructor then its called singleton
//through literal object is not singleton

//object literals

const mySym = Symbol('sym')

const jUser={
    name:"Dhruv",
    age:30,
    email:"dhruv@google.com",
    isLogged:true,
    "study":"Btech",
    [mySym]:"symbol"
}

console.log(jUser.name)
console.log(jUser["study"])//this will not access by .
console.log(jUser[mySym])

jUser.email = "demo@.com"
// Object.freeze(jUser)
jUser.email = "deo@.com"

console.log(jUser)

jUser.greeting = function(){
    console.log(`Hi ${this.name}`)
}
console.log(jUser.greeting)
console.log(jUser.greeting())
console.log(jUser)
