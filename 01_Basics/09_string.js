let name = "Dhruv"
let course = "BTech"
//following syntax is called string interpolation
// console.log(`Hello my name is ${name} and my course is ${course}`)

const gameName = new String("Roblox")
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('o'))

const subNewString = gameName.substring(-2,4)
console.log(subNewString)

const newString = gameName.slice(-2,3)
console.log(newString)

//trim
let trimDemo = "    trim   demo     "
console.log(trimDemo)
console.log(trimDemo.trim())
console.log(trimDemo.trimEnd())
console.log(trimDemo.trimStart())

//replace
const url = "https://dhruv.com/new%20url"
const changedUrl = url.replace("%20",'-')
console.log(changedUrl)

console.log(url.includes('dhruv'))//true
const splitDemo = "first-second-third-fourth"
console.log(splitDemo.split('-'))


