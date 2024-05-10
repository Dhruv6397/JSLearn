//two types of data types:primitive and non primitive
//primitive data types are call by value
//7 primitive types : String ,Number ,Boolean, null, undefined, symbol, BigInt

//Reference type or Non-primitive

//Array, Objects, functions

//JS is dynamically typed

const id = Symbol('123')
const anotherId = Symbol(123)
console.log(id==anotherId)

//arrays
const heros = ["Batman","Ironman","Spiderman"]
let myObj={
    name:"dhruv",
    age:20
}
let varFunction = function(){
    console.log("inside function")
}
console.log(typeof varFunction)