//declaration of array
const myArr = [0,7,5,5,73,7,5,3]
const myArr01 = new Array(3,5,3,5,2,45)
// console.log(myArr[2])
// console.log(myArr01)
// console.log(myArr.length)
//array make shallow copy, it share same reference point
//where deep copy not share reference
//js array are resizable
//they are not associative it means we cant access value by its name itself


myArr.push(6)
console.log(myArr)//[0,7,5,5,73,7,5,3,6]
myArr.pop()
console.log(myArr)//[0,7,5,5,73,7,5,3]

console.log(myArr.length)//8
myArr.unshift(9)//[9,0,7,5,5,73,7,5,3]
console.log(myArr)

myArr.shift()
console.log(myArr)//[0,7,5,5,73,7,5,3]

console.log(myArr.includes(7))//true
console.log(myArr.indexOf(3))//7

const newArr = myArr.join()
console.log(newArr)//0,7,5,5,73,7,5,3
console.log(typeof newArr)//string

const sliceDemo = [1,5,2,6,3,7,5,6]
console.log(sliceDemo.slice(0,4))//[1,5,2,6]
console.log(sliceDemo)//in slice original array remain same

const spliceDemo = [6,2,6,2,41,3,5,6]
console.log(spliceDemo.splice(1,3))//[2,6,2]
console.log(spliceDemo)//using splice original array got manipulated

console.log(myArr.sort())
console.log(myArr.reverse())
