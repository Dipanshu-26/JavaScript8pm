// Closures in JavaScript
// What is a Closure? -- 
// A closure is created when an inner function remembers and accesses variables from its outer function 
// even after the outer function has finished execution.

//1. Function return concept

function add(x, y) {
    console.log(x + y)
    return x + y
}

let q1 = add(10, 20)
console.log(q1)

//function closure
function addB() {
    let x = 100
    let y = 200
    return function () {
        console.log(x + y)
    }
}

let fn = addB()
console.log(fn)
console.log("calling inner function")
fn()

// let fn = function(){     //ReferenceError: x is not defined
//     console.log(x+y)
// }
// fn()


// actual difference between arrow and function defination or declaration

// let info = {
//     fname: "dipanshu",
//     lname: "chawde",
//     displayName: function () {
//         //this ---> info
//         console.log(this.fname + this.lname)

//         let displayName2 = function () {
//             //this --->window
//             console.log(this.fname + this.lname)
//         }
//         displayName2()
//     }
// }
// console.log(info.fname)
// info.displayName()
//---------------------------------
// var fname = "aditya"
// var lname = "masalkar"
// let info = {
//     fname: "dipanshu",
//     lname: "chawde",
//     displayName: function () {
//         //this ---> info
//         console.log(this.fname + this.lname)

//         let displayName2 = function () {
//             //this --->window
//             console.log(this.fname + this.lname)
//         }
//         displayName2()
//     }
// }
// console.log(info.fname)
// info.displayName()
//-------------------------------------------------------------

// let info = {
//     fname: "dipanshu",
//     lname: "chawde",
//     displayName: function () {
//         //this ---> info
//         console.log(this.fname + this.lname)

//         let displayName2 = () => {
//             //this --->parent scope---->info
//             console.log(this.fname + this.lname)
//         }
//         displayName2()
//     }
// }
// info.displayName()
//----------------------------------------------------

// let info = {
//     fname: "dipanshu",
//     lname: "chawde",
//     displayName: ()=> {
//         //this ---> parent scope --->window
//         console.log(this.fname + this.lname)

//         let displayName2 = () => {
//             //this --->parent scope---->window
//             console.log(this.fname + this.lname)
//         }
//         displayName2()
//     }
// }
// info.displayName()
//------------------------------------------------------------

var fname = "aditya"
var lname = "masalkar"
let info = {
    fname: "dipanshu",
    lname: "chawde",
    displayName: ()=> {
        //this ---> parent scope --->window
        console.log(this.fname + this.lname)

        let displayName2 = () => {
            //this --->parent scope---->window
            console.log(this.fname + this.lname)
        }
        displayName2()
    }
}
info.displayName()