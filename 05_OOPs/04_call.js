function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username,email,pwd){
    setUsername.call(this,username)
    this.email = email
    this.pwd = pwd
}

const user = new createUser("Dhruv","example@gmail.com","AFdsac@434")

console.log(user)