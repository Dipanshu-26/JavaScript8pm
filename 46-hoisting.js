//hoisting of let var and const

//let
//console.log(a)            //Cannot access 'a' before initialization
let a        
console.log(a)
a=10
console.log(a)

// let → hoisted but not initialized
// let is hoisted, but it is placed in a special area called the Temporal Dead Zone (TDZ).

console.log("---------------------")
//var
console.log(b)
var b 
console.log(b)
b="dip"
console.log(b)
//internaly
// var a
// console.log(b)
// console.log(b)
//b="dip"
//console.log(b)

//var → hoisted and initialized with undefined

//const works same as let

const c = 100 

