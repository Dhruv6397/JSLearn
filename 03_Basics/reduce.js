arr = [1,2,3,4]


res = arr.reduce(function(acc,currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc+currVal
},0)

console.log(res)

newArr = arr.reduce((acc,currVal)=> acc+currVal,0)
console.log(newArr)