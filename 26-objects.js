// const { startTransition } = require("react")

// let person = {
//     name : "dipanshu",
//     age : 40,
//     city : "pune"
// }

// console.log(person)
// console.log(person.name)
// console.log(person["city"])

// //add, update

// person.language = "Marathi"
// person["country"] = "India"
// console.log(person)

// person.country = "USA"
// console.log(person)

// //delete

// delete person.country 
// delete person["language"]
// console.log(person)


// //nested object

// let info = {
//     name : "dipanshu",
//     address : {
//         city : "pune",
//         country : "India"
//     },
//     skill : ["python", "javascript","SQL"]
// }

// console.log(info.name)
// console.log(info.address.city)
// console.log(info.skill[1])

//objects with method

let car = {
    brand: "Audi",
    start: function () {
        console.log("Car started")
    },
    stop: function () {
        console.log("car stoped")
    },
    brandName: function () {
        console.log(this.brand)
    }
}

console.log(car)
//console.log(car.start())
car.start()
car.stop()
car.brandName()

console.log("-------------------------------------")
// ----------------------------------------------------
let info2 = {
    firstName: "Vishal",
    lastName: "Raut",
    age: 30,
    city: "Pune",
    skills: ["js", "salesforce", "cypress"],
    marks: 100
}



// arr = [1,2,3,4,5,6,7]
// for(let i=0;i<arr.length;i++){
//     console.log(i)
//     console.log(arr[i])
// }


for(let key in info2){
    //console.log(key,info2[key] )
    //console.log(key )
    console.log(info2[key] )
}
console.log("-------------------------------------")
console.log(Object.keys(info2))

console.log(Object.values(info2))

console.log(Object.entries(info2))

console.log("-------------------------------------")
console.log(Object.keys(info2).length)

console.log("-------------------------------------")
for(let key of Object.keys(info2)){
    console.log(key)
}

console.log("-------------------------------------")
for(let val of Object.values(info2)){
    console.log(val)
}

console.log("-------------------------------------")
for(let ent of Object.entries(info2)){
    console.log(ent)
}