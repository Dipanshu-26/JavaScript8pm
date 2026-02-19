//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let arr1 = [11,22,33,44]
let arr2 = ["dipanshu","nitin","neel","tanish"]

let arr = [...arr1,...arr2]
console.log(arr)

let info1 = {
    fname : "dipanshu",
    lname : "chawde",
    location : "pune",
    mobno : 9922447802
}

let info2={
    mother : "dipti",
    father : "niranjan",
    dob : "26-11-83"
}

let info = {...info1,...info2}
console.log(info)

let {fname,lname,mother,father,...restinfo} = info
console.log(fname)
console.log(lname)
console.log(mother)
console.log(father)
console.log(restinfo)

arr = [11,22,33,44,55,66]

let [a,...remaining] = arr
console.log(a)
console.log(remaining)

console.log("---------------------------------")
//we are assigning key values to different variable name
let { mother : motherName,father:fatherName,fname : namee, lname : surname,...restinfo2} = info
console.log(namee)
console.log(surname)
console.log(motherName)
console.log(fatherName)
console.log(restinfo2)
console.log("---------------------------------")
console.log(info)