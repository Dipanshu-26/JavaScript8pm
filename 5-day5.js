//ternary operator
//Use ternary for simple if–else, not for complex decision-making.
//Use for simple conditions , When there are only two outcomes To write short and readable code

// want to find greater Number

let a=100
let b=20
if(a>b){
  console.log("a is greater")
}
else{
  console.log("b is greater")
}

// short - hand --- ternary operator

//condition ? execute statement 1 : execute statement 2
//condition ? if true execute this : else execute this
a>b ? console.log("a is greater") : console.log("b is greater")


//program 2

// can drive or not  ---> age 

let age = 13

if(age<18){
  console.log("you can not drive...")
}
else {
  console.log("you can drive....")
}

//--------------------------------

//condition
age>=18 ? console.log("you can drive...") : console.log("you can not drive...")

// even odd

let j=132
j%2 == 0 ? console.log("even number") : console.log("odd number")

//condition ? stmt for true : stmt for false

//positive negative not

a = -12
a<0 ? console.log("negative number") : console.log("positive number")

// login check

let isLogin = false
isLogin ? console.log("Welcome!!!") : console.log("please try again....")


//----------------------------------

let x=10
let y=20
let z=30
if(x>y && x>z){
  console.log("x is greater")
}
else if(y>x && y>z){
  console.log("y is greater")
}
else{
  console.log("z is greater")
}

//----------------------------------
console.log("-------------------------")

; ((x>y && x>z)
  ? console.log("x is greater")
  : ((y>x && y>z)
      ? console.log("y is greater")
      : console.log("z is greater")))