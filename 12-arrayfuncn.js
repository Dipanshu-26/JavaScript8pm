// array functions
// push(arg), unshift(arg),pop(), shift(), includes(arg), indexOf(arg-el),at(arg-index), reverse(),join(arg),concat(arg), flat()

// //more than one of any datatype

// //array => datatype

//let a=[1,"dipanshu",'123@dip',true]      //length is 4 and last index is 3
//     0    1          2       3

//javascrpt => Object

// person =>Object
// properties => Height, color, weight, name, age 
// method=>talk(), walk(),study(),gym()

//gym()
//action=> exercise
//return=> weightreduce, 

//array=>object
//prperties=>length
//methods=>push(),pop()......

// methods 

// push()
// action - add the element to end of array
// return - new length  of array

let names=['virat','MS','sachin','rohit']
let q1=names.push("arshdeep")
console.log(names)
console.log(q1)

// unshift()
// action - add the element at 0th index of array
// return - new length  of array               0         1          2          3

let q2=names.unshift("sourav")
console.log(names)
console.log(q2)


// pop()
// action - remove the last element
// return -- returns the deleted element
let q3=names.pop()
console.log(names)
console.log(q3)



//shift()
// action - remove the first element
// return -- returns the deleted element
let q4=names.shift()
console.log(names)
console.log(q4)

//push(), unshift(),        pop(),shift()

//reverse()

let a=[1,2,3,4,5,6,7]
let rev=a.reverse()
console.log(rev)

console.log("-----------")
//concat
let x=[11,22,33,44]
let y=['a','b','c']

let c =x.concat(y)
console.log(c)
console.log(x)
console.log(y)

let c1 =y.concat(x)
console.log(c1)
console.log(x)
console.log(y)

console.log("---------------------")
//join()

let info=["dipanshu","chawde",9922447802]
let q5=info.join("_")
console.log(q5)
console.log(typeof(q5))    //string
console.log(typeof(info))   //object

console.log("-----------")
//dimensions
//         0  1  2    0  1  2   0   1  2
let arr=[[11,22,33],[44,55,66],[77,88,99]]
//         0           1           2

//11=> [0][0]

console.log(arr[0][0])
console.log(arr[2][1])

//flat()

let q6=arr.flat()
console.log(q6)
console.log(arr)


//includes(arg), indexOf(arg-el),at(arg-index)