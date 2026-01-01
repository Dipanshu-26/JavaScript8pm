//indexOf()


//indexOf()
//action=>finds index of element of array 
//retuen=> index, if not present return -1  

//        0  1  2  3  4
let num=[11,22,33,44,55]     

let a1= num.indexOf(22)
console.log(a1)

let a2= num.indexOf(55)
console.log(a2)

let a3= num.indexOf(77)
console.log(a3)


// at()
// action => returns the element at the given index in an array
// return => element value, if index is invalid returns undefined

//           0      1         2
let city=['pune','mumbai','nagpur']
//          -3        -2      -1

let a4=city.at(1)
console.log(a4)

console.log(city.at(-1))
console.log(city.at(-2))

console.log(city.at(10))
console.log(city.at(-5))



// slice()
// syntax => slice(startIndex,EndIndex(not included))
// action => extracts a portion of the array from startIndex to before endIndex
// return => a new array (sliced elements) 

//           0       1          2         3        4          5
let city2=['pune','mumbai','banglore','chennai','kolkota','mysore']
//           -6       -5          -4            -3         -2     -1

//city.slice(startIndex,endIndex(not inclusive))

let q1 = city2.slice(1)
console.log(q1)                 //[ 'mumbai', 'banglore', 'chennai', 'kolkota', 'mysore' ]

let q2 = city2.slice(2)
console.log(q2)                //[ 'banglore', 'chennai', 'kolkota', 'mysore' ]

let q3 = city2.slice(-5)
console.log(q3)

// //           0       1          2         3        4          5
// let city2=['pune','mumbai','banglore','chennai','kolkota','mysore']
// //           -6       -5          -4      -3         -2     -1

//city.slice(startIndex,endIndex(not inclusive))
let q4 = city2.slice(1,5)
console.log(q4)                // [ 'mumbai', 'banglore', 'chennai', 'kolkota' ]

let q5 = city2.slice(1,-1)
console.log(q5)              // [ 'mumbai', 'banglore', 'chennai', 'kolkota' ]

let q6= city2.slice(-1,1)
console.log(q6)               //[]

let q7= city2.slice(-5,5)
console.log(q7)

let q8= city2.slice(-5,-1)
console.log(q8)

let q9= city2.slice(-1,-5)
console.log(q9)

console.log(city2)

// splice()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

console.log("------------------------")
//splice(index,numberOfElmentstoBeDeleted,rep1,rep2)

//              0         1      2      3     4          5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]

let b1 = animals.splice(2,2)
console.log(b1)
console.log(animals)                    //[ 'tiger', 'lion', 'rabbit', 'snake' ]

//animals = [ 'tiger', 'lion', 'rabbit', 'snake' ]
b1 = animals.splice(2,3)
console.log(b1)
console.log(animals)     //[ 'tiger', 'lion' ]

//splice(index,numberOfElmentstoBeDeleted,rep1,rep2)
//              0         1      2      3     4          5
animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]
b1 = animals.splice(2,2,'a','b')
console.log(animals)

//              0         1      2      3     4          5
animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]
b1 = animals.splice(2,2,'a','b','c','d')
console.log(animals)

