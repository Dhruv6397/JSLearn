//immediately invoked function expression

(function ii(){
    console.log('iife')
})();

//first parentheses for definition
//second for execution

//due to global scope pollution , to remove problem of global scope pollution we use iife


//named iife with parameter 
(
    (name)=>{
        console.log(`${name}`,"second")
    }
)('dhruv');

//we can pass parameter in above one as well