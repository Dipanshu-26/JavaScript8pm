// let arr = [1,2,3,4,5,6,7,8]

// arr.push(111)
// console.log(arr)

// arr.unshift(222)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

//------------------------------------------------------------------

let students = [
    {
        firstName: "jaya",
        lastName: "kumari",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks: 50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks: 100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks: 35
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks: 45
    },
    {
        firstName: "rama",
        lastName: "kant",
        age: 30,
        city: "nagpur",
        skills: ["python", 'javascript'],
        marks: 23
    }

]

//addition of marks of all students
let totalM = students.reduce(function(acc,el){
    return acc + el.marks
},0)
console.log(totalM)

//above45

let above45 = students.filter(function(el){
    return el.marks > 45
})
console.log(above45)

//above45

let below45 = students.filter(function(el){
    return el.marks < 45
})
console.log(below45)

// want to increase marks by 10  of student having marks <=35 
//filter marks <=35   

console.log("------------------------------------")
students.filter(function(el){
    return el.marks <=35
}).forEach(function(el){
    el.marks = el.marks + 10
    //console.log(el)
    console.log(el.firstName)
})

console.log("------------------------------------")
console.log(students)

