// class User{
//     constructor(username,email,pwd){
//         this.username = username
//         this.email = email
//         this.pwd = pwd
//     }

//     encryptPWD(){
//         return `${this.pwd+"apfa"}`
//     }
//     changeToUpperCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const usr = new User('Dhruv',"example@gmail.com","ERa@9800")
// console.log(usr.changeToUpperCase())
// console.log(usr.encryptPWD())

//behind the scene

// function UserDemo(username,email,pwd){
//     this.username = username
//     this.email = email
//     this.pwd = pwd
// }

// UserDemo.prototype.changeCase=function(username){
//     return this.username.toUpperCase()
// }
// UserDemo.prototype.encryptPWD = function(){
//     return `${this.pwd}+jgldfg`
// }

// const usrDemo = new UserDemo("Behind","thescence@gmail.com","dskhf@5435")

// console.log(usrDemo.encryptPWD())
// console.log(usrDemo.changeCase())

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,pwd){
        super(username)
        this.email =email
        this.pwd = pwd
    }
}
const user = new User("Jmcov","example@jk.com","423fsda")
user.logMe()

