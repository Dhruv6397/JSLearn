class Parent{
    constructor(name){
        this.name = name
    }
    static staticMethod(){
        console.log("this is static call")
    }
}
class Child extends Parent{
    constructor(username,email,pwd){
        super(username)
        this.email = email
        this.pwd = pwd
    }
}

const ch1 = new  Child("Dhruv","example.com","fdat323")
Child.staticMethod()