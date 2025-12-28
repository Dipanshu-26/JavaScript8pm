let x='x'
console.log(x == 'x')
//        variable  value


// logical operators
// and && , or ||, not !

// and --> &&
// true     true  --> true 
// true     false --> false
// false    true  -->false
// false    false --> false
// ==> if any of input is false then output is false , true only if all inputs are true

console.log(4 >3 && 4 !== '4')
//          t         t     --> t

console.log(4>3 && 4 === '4')
console.log(4<3 && 4==4)
console.log(4<3 && 4 === '4')


//or ||
// true    true  -->true
// true    false -->true
// false   true  -->true
// false   false -->false
// ==> if any input is true then output will be true , false if all inputs are false

console.log(4 >3 || 4 !== '4')
console.log( 4> 3 || 4 === '4')
console.log(4<3 || 4 !== '4')
console.log(4>7 || 4 === '4')

// not !
// true   false
// false   true
console.log(!(4=== '4'))
//           !(f) -->t
console.log(!(4 !== '4'))
//       !(t) --->f


// conditional statements
// one input and more output ----> condition  ----> true/false

// num > 0 and num <=5   5% discount
// num >5  and num <=10  10% discount
// num > 10               20% discount

console.log("----------------")
let num=9
if(num > 0 && num <=5){
  console.log("5% discount")
}
if(num > 5 && num <=10){
  console.log("10% discount")
}
if(num > 10){
  console.log("20% discount")
}


console.log("----------------")

if(num > 0 && num <=5){
  console.log("5% discount")
}
else if(num > 5 && num <=10){
  console.log("10% discount")
}
else if(num > 10){
  console.log("20% discount")
}
else{
  console.log("incorrect input....")
}

console.log("----------------")

//m >90 A grade, m >75 B grade  m>65  c grade

let marks=10
if(marks > 90){
  console.log("A")
}
if(marks > 75){
  console.log('B')
}
if(marks > 65){
  console.log("C")
}

console.log("----------------")
if(marks > 90){
  console.log("A")
}
else if(marks > 75){
  console.log('B')
}
else if(marks > 65){
  console.log("C")
}
else {
  console.log("please try again...")
}