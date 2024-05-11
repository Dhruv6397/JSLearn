//explicitly defining datatype
const balance = new Number(100)
console.log(balance)//[Number: 100]

const normalDefinition = 400
console.log(normalDefinition)//400

console.log(balance.toString())//400, but format will be string
console.log(balance.toString().length)//3
console.log(balance.toFixed(3))//100.000
let precisionDemo = 123.8966
console.log(precisionDemo.toPrecision(3))

const val = 1000000
console.log(val.toLocaleString('en-IN'))


/******************************* */
console.log(Math)
console.log(Math.abs(-5))//5
console.log(Math.round(4.6))//5
console.log(Math.ceil(4.6))//5
console.log(Math.floor(4.6))//4
console.log(Math.min(5,4,6,3,6))//3
console.log(Math.max(6,4,7,4,6))//7
console.log((Math.random()*10)+1)

const minVal = 10
const maxVal = 20

console.log( Math.random() *(maxVal - minVal +1) + minVal) 