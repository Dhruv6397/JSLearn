let score = 33
let str = "33abc"
console.log(typeof score)
console.log(typeof str)

let valueInNumber = Number(str)
console.log(typeof valueInNumber)
console.log(valueInNumber)
console.log(typeof NaN)

let nullAssignment = null
console.log(typeof nullAssignment)

let undefinedVar = undefined
console.log(typeof undefinedVar)

let booleaVal = true
console.log(typeof( booleaVal))

//conversion

let isBoolean = Boolean(1)
let booleanEmpty = Boolean("")//empty string give false
let booleanFill = Boolean("false")//filled string gives true
console.log(isBoolean)
console.log(booleanEmpty)
console.log(booleanFill)