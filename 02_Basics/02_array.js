const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman','flash','batman']
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)//['thor', 'ironman', 'spiderman', ['superman','flash','batman']]
//push add element in existing array

console.log(marvel_heros.concat(dc_heros))//concat create new array 

const all_new_heros = [...marvel_heros,...dc_heros]//spread
console.log(all_new_heros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [2,3,4,2,[3,4,6,3,5],[5,4,4,3,[5,4,3,3]]]
const res_another_array = another_array.flat(2)//here we pass depth in numbers for full array to be flat you can pass 'infinity'
console.log(res_another_array)


console.log(Array.isArray('dhruv'))//false
console.log(Array.from('dhruv'))//[d,h,r,u,v]
console.log(Array.from(124))//[]
console.log(Array.from({name:"dhruv"}))//[]

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))//[100,200,300]

