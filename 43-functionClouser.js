// Closures in JavaScript
// What is a Closure? -- 
// A closure is created when an inner function remembers and accesses variables from its outer function 
// even after the outer function has finished execution.

//1. Function return concept

function add(x, y) {
    console.log(x + y)
    return x + y
}
let q1 = add(12, 13)
console.log(q1)


// closure concept 

function addA() {
    let x = 100
    let y = 200
    return function () {
        console.log(x + y)
    }
}

let fn = addA()
console.log(fn)
fn()

//x and y are not scope of addA function
// let fn = function(){
//     console.log(x+y)
// }
// fn()

//actual difference between arrow function function expression or declaration

var fname = "dipanshu"
var lname = "chawde"

let info = {
    fname: "aditya",
    lname: "masalkar",
    displayName: function () {
        //this --->info
        console.log(this.fname + this.lname)
        let displayName2 = function () {
            //this --> window
            console.log(this.fname + this.lname)
        }
        displayName2()
    }
}

info.displayName()

//-------------------------
// output in vs code 
// dipanshuchawde
// NaN

// output in browser
// dipanshuchawde
// adityamasalkar
//explanation------------
// This is a normal function call, NOT attached to object.
// Normal function call → this depends on environment

// In browser:

// Global object = window
// In vs code:
// your var variables are NOT attached to global.