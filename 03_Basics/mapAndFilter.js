arr = [ 36,3,52,52,2,255,3]

res1 = arr.filter((num)=> num > 30)

console.log(res1)

res2 = arr.map((num) => num * num )
console.log(res2)

//chaining

res3 = arr.map((num)=> num-100).map((num)=>num+100).filter((num)=>num>30)

console.log(res3)