//some(), every(), find(), findIndex()

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

//some ---> boolean ---->true/false
let arr=[10,20,40,70,30,50]

let q = arr.some(function(el,idx, ar){
    return el>100
})

console.log(q)


// every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false

arr=[10,20,40,70,30,50]

let q1= arr.every(function(el){
    return el >=10
})

console.log(q1)

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

arr=[10,50,20,40,70,30,50]
let q3 = arr.find(function(el) {
    return el>30
})
console.log(q3)

// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

//    0  1  2  3  4  5  6
arr=[10,20,20,40,70,30,50]
let q4 = arr.findIndex(function(el){
    return el>30
})

console.log(q4)


//includes(arg), indexOf(arg-el),at(arg-index)
// strings 