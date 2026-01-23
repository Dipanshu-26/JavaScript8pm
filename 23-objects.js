//objects

// let info = ["dipanshu","chawde",23,42]

// info = ["sara","arjun",23,21]

//objects ==> key : value pair(property)

//create
let info = {
    fname: "Dipanshu",
    lname: "chawde",
    roll: 40,
    age: 42,
}

//CRUD -- create , retrive , update, delete 

//retrive
console.log(info)

//dot operator, bracket 
console.log(info.fname)
console.log(info['lname'])

//update/add

info.fname = 'Aditya'
info['lname'] = "masalkar"
console.log(info)

info.skills = 'javascript'
console.log(info)

info.skills = ['javascript','python','java','cypress']
console.log(info)

a=10
console.log(a)

a=["dipanshu","chawde","10"]
console.log(a)

info['language'] = "marathi"
console.log(info)

//delete
delete info.language
console.log(info)

delete info.fname
console.log(info)