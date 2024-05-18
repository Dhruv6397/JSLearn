const map = new Map()
map.set(1,"one")
map.set(2,"two")
map.set(3,"three")

for(key of map){
    console.log(key)
}

for([key,val] of map){
    console.log(`key is ${key} and value is ${val}`)
}


