function addTwoNumbers(n1,n2){
    console.log(n1+n2)
}
addTwoNumbers(5,3)
addTwoNumbers(5,"h")
addTwoNumbers(5,null)

function Login(name){
    return `${name} is logged in `
}
console.log(Login())//if name not passed it will show "undefined is logged in"


function calculateCartPrice(num1,num2,...nums){
    return nums
}

console.log(calculateCartPrice(4,5,6,3,3,3))//return an array


obj = {
    nam:'ram',
    cast : 'gs'
}

function passingObject(obj){
    return `${obj.nam} and ${obj.cast}`
}

console.log(passingObject(obj))
console.log(passingObject({
    nam:'rh',
    cast:'hjf',
    gh:'ksj'
}))


function passingArray(arr){
    return arr
}

console.log(passingArray([5,3,3,34]))


//hoisting
//1st
addTwo(3)//5
function addTwo(num){
    console.log(num+2)
}

//2nd

addOne(3)//this will give error 
const addOne = function(num){
    console.log(num+1)
}

//above concept is called hoisting