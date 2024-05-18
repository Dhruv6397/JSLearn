arr = [3,2,2,5,2,5]

arr.forEach(element => {
    console.log(element)
});

arr.forEach((element,index, arr) => {
    console.log(element,index,arr)
});


function dummy(num){
console.log(num*num)
}

arr.forEach(dummy)

console.log(arr)