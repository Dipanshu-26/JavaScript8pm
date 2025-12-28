// let const

let a=10
console.log(a)

let b="dipanshu"
console.log(b)

const pi=3.14
console.log(pi)

//pi=20
console.log(pi)

a="neel"
console.log(a)

let x=10
let y=20

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)


//220,30

//functions -resusable block of code 

//function without parameter and return type 

console.log("-------------------")


function calc1(){
  console.log(10+20)
  console.log(10-20)
  console.log(10*20)
}

calc1()
calc1()


// function with parameter and without return Type

// hello, dipanshu !!!!!!
// hello, supriya !!!!!!
function greet(str){
  console.log(`hello, ${str} !!!!!!`)  //string interpolation text ${variable} text
}

greet('dipanshu')

let nm='supriya'
greet(nm)

console.log("-------------------")
// function with parameter and return Type

// average of 3 Number

function average(a,b,c){
  let avg =(a+b+c)/3
  return avg
}

let res = average(10,10,10)
console.log(res)

let res2 = average(30,20,10)
console.log(res2)