//strings in js

//toUpperCase(), toLowerCase(), includes(), indexOf(), startsWith()

let a= "dipanshu"
console.log(a)
console.log(typeof(a))

a= 10
console.log(a)
console.log(typeof(a))

a= 10.5
console.log(a)
console.log(typeof(a))

a= -10
console.log(a)
console.log(typeof(a))

a= -10.5
console.log(a)
console.log(typeof(a))

a= "123@dipanshu"
console.log(a)
console.log(typeof(a))


a= [1,2,3,4,5,6]
console.log(a)
console.log(typeof(a))

a= 'abc'
console.log(a)
console.log(typeof(a))


// Object
// properties methods 
// methods() 
// action 
// return type

//string interpolation

let str="dipanshu"

console.log(`Hello, ${str}!!!`)

console.log("Hello, " + str + "!!!")


console.log("---------------------")
let city = "ahilyanagar"

//    0   1   2   3   4   5   6    7   8    9      10              //last index is 10 but char counrt is 11
//    a   h   i   l   y   a   n   a    g    a      r


console.log(city[5])

console.log(city[8])

console.log(city.length)

console.log(city[city.length-1])

console.log("---------------------")


// 10+10 = 20
// "10" + "10"= "1010"

let x=20
let y=20
let z="dip"

console.log(x+y)
console.log(x+z)
console.log(z+y)

console.log("---------------")

//looping

city = "ahilyanagar"

//    0   1   2   3   4   5   6    7   8    9      10              //last index is 10 but char counrt is 11
//    a   h   i   l   y   a   n   a    g    a      r

for(let i=0;i<city.length;i++){
    console.log(city[i])
}
console.log(city)

for(let i=city.length-1;i>=0;i--){
    console.log(city[i])
}

console.log("---------------")
//toUpperCase(), toLowerCase(), includes(), indexOf(), startsWith()

let str1 = "Dipanshu NITIN ChaWde"

let s1 = str1.toUpperCase()
console.log(s1)

console.log(str1.toLowerCase())
 
//includes  -- case sensetive
let s2 = str1.includes("dip")
console.log(s2)

s2 = str1.includes("Dip")
console.log(s2)

s2 = str1.includes("nit")
console.log(s2)

s2 = str1.includes("NIT")
console.log(s2)

s2 = str1.includes("IN Ch")
console.log(s2)

//indexOf()  gives index of char if presesnt else -1
str1 = "Dipanshu NITIN ChaWde"
console.log(str1.indexOf("D"))
console.log(str1.indexOf("d"))

console.log(str1.indexOf("a"))

console.log(str1.indexOf("z"))