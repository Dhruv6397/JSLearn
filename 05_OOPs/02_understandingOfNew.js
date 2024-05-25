function checkFunctionToBeObject(num){
    return num*3
}
checkFunctionToBeObject.power = 1
console.log(checkFunctionToBeObject(3))
console.log(checkFunctionToBeObject.power)
console.log(checkFunctionToBeObject.prototype)

//so above code snippet show that
//eventually function as well is object in js

function check(username,score){
    this.username = username,
    this.score = score
}

check.prototype.increment = function(){
    this.score++
}
check.prototype.show = function(){
    console.log(`score is ${this.score}`)
}

//user01 = check('Dhruv',20) 
user02 = new check('JMCOv',28)

//user01.show()//when u will use increment or show method
//but with user02 it is okk
user02.show()
