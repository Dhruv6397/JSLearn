let myname = "Dhruv     "
console.log(myname.length)
console.log(myname.trim().length)

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`spidy power ${this.spiderman}`)
    }
}

Object.prototype.method = function(){
    console.log("method is present in all objects")
}

heroPower.method()


//for array

myHeros = ['thor','spiderman']

myHeros.method()

//inheritance

const teacher = {
    makeVideo : false
}

const TeachingSupport ={
    isAvailable : true
}

const TASupport = {
    makeAssignement  : 'js assignment',
    fulltime: true,
    __proto__:TeachingSupport
}

teacher.__proto__ = TeachingSupport



//modern syntax
//Object.setPrototypeOf(TeachingSupport,teacher)


//

String.prototype.trueLength = function(){
    console.log(this)
    console.log(`True length is : ${this.trim().length}`)
}
"jmcov    ".trueLength()