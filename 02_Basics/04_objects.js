//single ton object
const userSingleton = new Object()

const user  ={
    id:"user1",
    fullname:{
        firstName:"Dhruv",
        lastName:"Verma"
    }
}
console.log(user)//{ id: 'user1', fullname: { firstName: 'Dhruv', lastName: 'Verma' } }

//combining object

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = {obj1,obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1,...obj2}
console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


console.log(Object.keys(user))//[ 'id', 'fullname' ] return type is array
console.log(Object.values(user))//[ 'user1', { firstName: 'Dhruv', lastName: 'Verma' } ]
console.log(user.hasOwnProperty("fullname"))//true



//object destructuring

const demoObject = {
    key1:"first",
    key2:"second"
}

const {key1: ky1} = demoObject
console.log(ky1)


//further

const demoObject = {
    key1:"first",
    key2:"second"
}

const {key1: ky1} = demoObject
console.log(ky1)


