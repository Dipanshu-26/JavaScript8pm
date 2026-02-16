//java script datatypes
// let
// const
// boolean 
// strings 
// arrays 
// objects
// Map
// set

let a= 10
console.log(typeof(a))

a="dipanshu"
console.log(typeof(a))

a= true
console.log(typeof(a))

a= [11,22,"dip",true]
console.log(typeof(a))

a= {
     x:"dipanshu",
     y:10
}
console.log(typeof(a))

let student = {
    fname : "dipanshu",
    30 : "chawde",
    true : 35,
    family : {
        mother : "dipti",
        father : "niranjan"
    },
    null : ["java","python"]
}

console.log(student)
console.log("----------------------------")

//map
//key -value pair

let map1 = new Map()

map1.set("fn", "dipanshu")
map1.set("ln","chawde")
map1.set(true, "haveVechile")
map1.set([11,22,33],"marks")
map1.set({fn:"dip",ln:"ch"},"info")
console.log(map1)

console.log("----------------------------")

console.log(map1.get("fn"))
console.log(map1.get("ln"))
console.log(map1.get(true))

console.log(map1.get([11,22,33]))     //undefined
console.log(map1.get({fn:"dip",ln:"ch"}))    //undefined


console.log("----------------------------")
console.log([11,22,33] == [11,22,33])  //false
//    address  200           300
console.log({fn:"dip",ln:"ch"} == {fn:"dip",ln:"ch"})   //false

let x=[11,22,33]
let y=[11,22,33]
console.log(x==y)

let c=x
console.log(x==c)

console.log(JSON.stringify(x) == JSON.stringify(y))

// ----------------------------------------------------------------------
console.log("----------------------------")
let map2 = new Map([
    [1,'admin'],
    [2,'manager'],
    [3,'customer']
])

console.log(map2)
console.log(map2.size)

// retrive
console.log(map2.get(3))
console.log(map2.get('admin')) //undefined coz map values retrived with key 
let q1=map2.get(2)
console.log(q1)

//add
let q2 = map2.set(4,'trainee')
console.log(map2)
console.log(q2)

let q3 = map2.set(5,'project leader')
console.log(map2)
console.log(q3)

//update
map2.set(5,'leader')
console.log(map2)

//delete
let q4=map2.delete(5)
console.log(map2)
console.log(q4)

//if any key exists or not

console.log(map2.has(3))

let q5 = map2.has(6)
console.log(q5)

console.log(map2.has("admin"))  //false it only finds key not value

//looping

for(let ky of map2.keys()){
    console.log(ky)
}

for(let val of map2.values()){
    console.log(val)
}

for(let ent of map2.entries()){
    console.log(ent)
}

for(let [key, val] of map2){
    console.log(key, val)
}

map2.forEach(function(v,k){
    console.log(k,v)
})



//----------------------------------------------------------------------
// JavaScript Data Types Classification
// Primitive Data Types -- Primitive types store single, immutable values and are stored by value.

// String -- Represents text data
// Number -- Represents numeric values (integer & decimal)
// Boolean -- Represents logical values (true / false)
// Undefined -- Variable declared but not assigned
// Null -- Intentional absence of value
// BigInt -- Used for very large integers
// Symbol -- Used to create unique identifiers

// Reference (Non-Primitive) Data Types -- Reference types store memory address and are mutable.

// Object -- Key–value pair structure
// Array --  Ordered collection of values
// Function -- Block of reusable code
// Class -- Blueprint for creating objects
// Set -- Collection of unique values
// Map -- Key–value pairs with any data type as key
// Date -- Used for date and time operations

// Key Difference (One Line)
// Primitive → stored by value | Reference → stored by reference


//----------------------------------------------------
// JavaScript Data Types & Structures – Short Notes
// 1. Object
// Collection of key–value pairs
// Used to represent real-world entities
// Keys are strings, values can be any data type
// Supports methods and properties

// 2. Array
// Ordered collection of values
// Index-based (starts from 0)
// Can store multiple data types
// Used for storing lists and performing bulk operations

// 3. String
// Sequence of characters
// Used to store text data
// Immutable (cannot be changed directly)
// Supports many built-in methods

// 4. Number
// Used for numeric values (integer & decimal)
// JavaScript has only one number type
// Supports arithmetic operations

// 5. Undefined
// Variable declared but value not assigned
// Indicates absence of value automatically
// Default value given by JavaScript

// 6. Null
// Represents intentional absence of value
// Assigned manually by programmer
// Used to clear or reset a variable

// 7. NaN (Not a Number)
// Result of an invalid numeric operation
// Type is number, but value is not valid
// Indicates calculation error

// 8. Boolean
// Represents logical values
// Only two values: true or false
// Commonly used in conditions and loops

// 9. Class
// Blueprint for creating objects
// Used in Object-Oriented Programming
// Helps in code reusability and structure
// Supports constructor, methods, inheritance

// 10. Set
// Collection of unique values
// Does not allow duplicates
// Maintains insertion order
// Useful for removing duplicate data

// One-line Summary for Students
// JavaScript provides primitive and reference types to store, structure, and manipulate data efficiently.