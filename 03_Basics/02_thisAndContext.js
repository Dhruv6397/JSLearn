const obj = {
    id: 9,
    name:'dhruv',
    func:function(){
        console.log(`Hello, ${this.name} `)
        console.log(this)
    }
    
}

console.log(obj.name)
obj.func()
obj.name='jmcov'
obj.func()

console.log(this)


const arrow = (num1,num2)=> {
    return num1+num2
}
console.log(arrow(4,5))

//implicit return
const imp01 = (num1,num2)=> num1+num2
console.log(imp01(6,7))

const imp02 = (num1,num2)=> ( num1+num2)
console.log(imp02(6,7))
