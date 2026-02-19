//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let num1 = [11, 22, 33, 44]
let num2 = [10, 20, 30, 40]

let num = [...num1, ...num2]
console.log(num)

let info1 = {
    fname: "dipanshu",
    lname: "chawde",
    age: 40,
    city: "pune"
}

let info2 = {
    fname: "aditya",
    lname: "masalkar",
    age: 40,
    city: "pune"
}

let allinfo = { ...info1, ...info2 }
console.log(allinfo)


let infoA = {
    fname: "dipanshu",
    lname: "chawde"

}

let infoB = {
    age: 40,
    city: "pune"
}

let infoall = { ...infoA, ...infoB }
console.log(infoall)


// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

//want all elements of array except first
let numbers=[10,20,30,40,50,60,70,80]

let [a,...rest] =numbers
console.log(a)
console.log(rest)

console.log("----------------------")
let [x,y,...z]= numbers
console.log(x)
console.log(typeof(x))
console.log(y)
console.log(z)
console.log(typeof(z))

//----------------------------------------------------------------------------------

let infoC = {
    firstName : "dipanshu",
   lastName : "chawde",
    age : 40,
    city : "pune"
}

//i want fn and ln 

let {firstName,lastName,...restInfo} = infoC
console.log(firstName)
console.log(typeof(firstName))
console.log(lastName)
console.log(restInfo)

console.log(infoC)