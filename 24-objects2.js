//objects 
//key : value pair 

let student ={
    fname : "dipanshu",
    lanme : "chawde",
    rollno : 24,
    age : 40,
    skills : ["python","javascript","sql","java"]
}

console.log(student)

// CRUD

console.log(student.fname)
console.log(student["rollno"])
console.log(student.skills)

for(let i=0;i<student.skills.length;i++){
    console.log(student.skills[i])
}


for(let i=0;i<student.skills.length;i++){
    if(student.skills[i]=="python"){
    console.log(student.skills[i])
    }
}

//add typescript in skills

student.skills.unshift("typescript")
console.log(student)

student.skills.push("playwright")
console.log(student)

student.city="pune"
console.log(student)

student.city="nagpur"
console.log(student)

//delete
delete student.city
console.log(student)

student["city"]="nagpur"
console.log(student)

student["city"]="pune"
console.log(student)


let car = {
    color : "red",
    model : "sedan",
    number : 1234,
    color : "white"
}
console.log(car)

//array of objects
let info = [
{
    fname : "dipanshu",
    lanme : "chawde",
    rollno : 24,
    age : 40,
    skills : ["python","javascript","sql","java"]
},
{
    fname : "neel",
    lanme : "chawde",
    rollno : 12,
    age : 9,
    skills : "python"
}
]

console.log(info[1].fname)

console.log(info[1].rollno)
console.log(info[1]["rollno"])


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

//addition of marks 

let totalM = students.reduce(function(acc,el,inx,arr){
    return acc + el.marks
},0)

console.log(totalM)

//get student marks above 45
let above45 = students.filter(function(el){
    return el.marks > 45
})
console.log(above45)

//below 45

let below45 = students.filter(function(el){
    return el.marks <=45
})
console.log(below45)