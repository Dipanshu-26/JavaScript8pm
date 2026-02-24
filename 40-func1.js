// function types 


//function declaration
greet()

function greet(){
    console.log("hello dipanshu...")
}

//greet()

//hoisted == you can call before defination/declaration

//function expression 
//not hoisted ==you can not call before defination/declaration

//greet2()    //Cannot access 'greet2' before initialization
let greet2 = function(){
    console.log("hello dipanshu...i am in greet2")
}

//greet2()


//arrow function
//short hand



function add2(a,b){
    return a+b
}

let a1 = add2(20,30)
console.log(a1)

//short hand
let add = (a,b) => a+b

let a2 = add(40,50)
console.log(a2)
console.log(add(100,200))

//IIFE (immediately invoked)
//want to create private variables 
;(()=>{
    console.log("IIFE run")
})()

//function constructor

function person(namee){
    this.namee = namee
}

let q1 = new person("Neel")
console.log(q1.namee)

//Anonymous Function

setTimeout(function(){
    console.log("Run")
}, 1000)

//Used in callbacks.