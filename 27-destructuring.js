//destructuring  (unpacking values from arrays or objects into variables)
// Destructuring is a JavaScript feature that allows you to extract values from 
// arrays or objects and store them into variables in a clean and readable way.
// Instead of accessing values one by one, destructuring lets you do it in a single line.

let arr = ["dipanshu","nitin","tanish","neel"]
console.log(arr[0])
console.log(arr[1])
console.log(arr[3])

let n1 = arr[0]
let n2 = arr[1]
let n3 = arr[2]

console.log(n1)
console.log(n2)
console.log(n3)
console.log("--------------------------------------")

let names = ["dipanshu","nitin","tanish","neel"]

// let [a1, a2,a3, a4] = names
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

console.log("--------------------------------------")

//let [a1, a2,a3] = names
// console.log(a1)
// console.log(a2)
// console.log(a3)

// console.log(a4)  //error  a4 is not defined

let [a1, a2,a3,a4,a5] = names
console.log(a1)
console.log(a2)
console.log(a3)

console.log(a4)
console.log(a5)
console.log("--------------------------------------")

let numbers = [11,22,33]
let [x,,y] = numbers

console.log(x)
console.log(y)

//           00      01       10         11          20        21
let st = [["pune","mumbai"],["nagpur","wardha"],["banglore","jaopur"]]

let [[c1,c2],[c3,c4],[c5,c6]] = st
console.log(c6)
console.log(c5)

console.log("--------------------------------------")

let info = {
    fname : "dipanshu",
    lname : "chawde"
}

// let {fname,lname}=info
// console.log(fname)
// console.log(lname)

// console.log(info.fname)
// console.log(info.lname)

console.log("--------------------------------------")

let info2 = {
    fname : "dipanshu",
    lname : "chawde",
    age : 40,
    parent : {
        mother : "dipati",
        father  :"niranjan"
    }
}

// let {fname, lname, age, parent: {mother, father}} = info2
// console.log(fname)
// console.log(lname)
// console.log(age)
// console.log(mother)
// console.log(father)
// console.log(parent)    //error : parent is not defined


// let {fname : fn, lname : ln, age : ag, parent: {mother : m, father : f}} = info2
// console.log(fn)
// console.log(ln)
// console.log(ag)
// console.log(m)
// console.log(f)



// let {fname : fn, lname : ln,parent: {mother : m, father : f}} = info2
// console.log(fn)
// console.log(ln)

// console.log(m)
// console.log(f)


let { parent: {mother : m, father : f}} = info2

console.log(m)
console.log(f)


let {parent: {mother, father}} = info2

console.log(mother)
console.log(father)
console.log("--------------------------------------")


let students = [
    {
        fname : "neel",
        lname : "chawde"
    },
     {
        fname : "rajasi",
        lname : "gaware"
    }
]

let [{fname : fn1, lname : ln1},{ lname : ln2}] = students

console.log(fn2)
console.log(ln2)


// let [,{lname : ln2}] = students

// //console.log(fn2)
// console.log(ln2)