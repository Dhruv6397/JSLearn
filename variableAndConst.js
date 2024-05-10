const name_of_constant = 2324
let account_Email = "dhruv@gmail.com"
var accountPassword = "12324"
accountCity = "Bareilly"
let accountState;

//name_of_constant = 432 can not change 
console.log(name_of_constant)

//now try to change rest of the variables

account_Email = "demo@email.com"
accountPassword = "42234"
accountCity = "Jalandhar"
console.table([account_Email,accountPassword,accountCity,accountState]);

/*in initial days javascript does not work on scope
this problem was related with var, so because of log 
and functional scope*/