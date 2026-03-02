// Difference between var, let, and const in JavaScript

// 1. var --- Function scoped, Can be re-declared, Can be re-assigned,
// Causes unexpected behavior → not recommended

// 2. let  --- Block scoped, Cannot be re-declared in the same scope, Can be re-assigned
// Preferred for variables whose value changes

// 3. const --- Block scoped, Cannot be re-declared, Cannot be re-assigned
// Must be initialized at declaration, Used for constant values


//var

var v1 = 10
console.log(v1)
var v1 = 20
console.log(v1)


let l1 = 10
console.log(v1)
//let l1=20    //Cannot redeclare block-scoped variable 'l1'.
l1 = 20
console.log(v1)


const c1 = 100
console.log(c1)
//c1=200     //TypeError: Assignment to constant variable.

console.log("--------------------------------")
//let : block scope {  ... }

let a = 100
console.log(a)
{
    let a = 200
    console.log(a)
}
console.log(a)


console.log("--------------------------------")


let a1 = 100
console.log(a)
{
    let b = 200
    console.log(b)
}
console.log(a)
//console.log(b)    // b is not defined


console.log("--------------------------------")

let a2 = "hi"
console.log(a2)          //hi
{
    a2 = "bye"
    console.log(a2)              //bye
}
console.log(a2)         //bye

console.log("--------------------------------")

let a22 = "hi"
console.log(a22)          //hi
{
    let a22 = "bye"
    console.log(a22)              //bye
}
console.log(a22)              //hi

console.log("--------------------------------")

const c2 = "const1"
console.log(c2)
{
    const c2 = "const2"
    console.log(c2)
}
console.log(c2)

console.log("--------------------------------")

// const c22 = "const1"
// // console.log(c22)
// {
//     const c22 = "const2"             
//     console.log(c22)
// }
// console.log(c22)               //ReferenceError: c22 is not defined

console.log("--------------------------------")

function scopeTest(){
    if(true){
        var v = "i am var"
        let l = "i am let"
        console.log(l)
    }
    console.log(v)
    //console.log(l)       //ReferenceError: l is not defined
}

scopeTest()
//console.log(v)      //ReferenceError: v is not defined
//console.log(l)   //ReferenceError: l is not defined

//hoisting 