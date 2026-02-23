//in js everything is object

// object  ==> properties ==>methods 

// person ==>
// properties = height , weight, color , name
// methods = walk(), talk()

let arr = [11,22,33]

let obj = {
    namee :"dipanshu",
    lname : "chawde",
    city  :"pune",
    display : function(){
        console.log(this.namee + " from " + this.city)
    }
}

function fun(){
    //
}

//prototype inheretance 
//prototype concept
// ⭐ What is Prototype in JavaScript?
// Every JavaScript object has a hidden link to another object called its prototype.
// This forms a prototype chain used for inheritance.
// Example:    names → Array.prototype → Object.prototype → null
// So arrays automatically have:push(),pop(),includes(),map(),filter(), your custom hello()

//arr ==> Array==>Object==>null

let a=[11,22,33,44]

Array.prototype.greet=function(){
    console.log("hello")
}
a.greet()
console.log(a.length)

arr.greet()

function greet(){
    console.log("jsadsjkd")
}
greet()