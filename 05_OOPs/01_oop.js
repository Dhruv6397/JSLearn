const user = { 
    username : "Dhruv",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`User details got to u and lgCount is ${this.loginCount}`)
        console.log("current context",this)
    }
}


console.log(user.username)
console.log(user.getUserDetails())

//constructor without new
const Cons01 = (name,age,status)=>{
    this.name = name,
    this.age = age,
    this.status = status
    return this
}

ob1 = Cons01('Dhruv',20,false)
ob2 = Cons01('Jmcov',30,true)
console.log(ob1)//this gives everything
console.log(ob2)//now this will override previous one 

//importance of new

//for the above issue we use new keyword
function Cons02 (name,age,status){
    this.name = name;
    this.age = age;
    this.status = status;
    
    return this//this is not necessary to put
    //return is implicitly there
}

obj1 = new Cons02('Dhruv', 18, true)
obj2 = new Cons02('Jmcov',30,true)

console.log(obj1)
console.log(obj2)//here issue is resolved
console.log(obj1.constructor)