//declaration of array
const myArr = [0,7,5,5,73,7,5,3]
const myArr01 = new Array(3,5,3,5,2,45)
console.log(myArr[2])
console.log(myArr01)
console.log(myArr.length)
//array make shallow copy, it share same copy
//where deep copy not share reference

myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)

