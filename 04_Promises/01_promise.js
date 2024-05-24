const prms01 = new Promise(function(resolve,rejecct){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is completed')
        resolve()
    },1000)
})

prms01.then(()=>{
    console.log("promise consumed. ")
})


new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved')
})


//passing data through resolve

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task 3')
        user = {name:"Dhruv",age:20}
        resolve(user)
    },1000)
}).then((user)=>{
    console.log(user)
})



new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let er = false
        user = {username:'JMCOV',age:20}
        if(er){
            resolve(user)
        }else{
            reject('Cloud not completed...')
        }
    },1000)
}).then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('your task is completed finally')
})



const prms05 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        let user = {username:'Brenzee',pwd:'Zxcv@0987'}
        if(error){
            resolve(user)
        }else{
            reject("could not resolve")
        }
    },1000)
})

async function consumePromise(){
    try{
        const response = await prms05
        console.log(response)
    }
    catch(error){
        console.log("error")
    }
}



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then ((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))