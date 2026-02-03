// Object Literal (short note)
// An object literal is a simple way to create an object using key–value pairs.
// Functions inside an object are called methods.
// `this` refers to the current object.

// PART 1: Object Literal (Problem Introduction)

let dip = {
    fname : "dipanshu",
    lname  :"chawde",
    displayName : function(){
        console.log(this.fname + " " + this.lname)
    }
}

console.log(dip.fname)
console.log(dip.lname)
dip.displayName()

let adi = {
    fname : "aditya",
    lname : "masalkar",
     displayName : function(){
        console.log(this.fname + " " + this.lname)
    }
}

console.log(adi.fname)
console.log(adi.lname)
adi.displayName()

// fname, lname → properties
// displayName() → method
// this → refers to the current object (dip)

//-----------------------------------------------------
//PART 2: classes
class Person {
    fname = undefined
    lname = undefined

    displayName(){
         console.log(this.fname + " " + this.lname)
    }
}

let dip1 = new Person()
let adi1 = new Person()

console.log(dip1.fname)
dip1.displayName()

// new → creates a new object
// Each object gets its own copy of data
// Methods are shared
// Why Output is undefined : “Class defines structure, not values.”

console.log("----------------------------------------")
// PART 3: Setting Values After Object Creation

dip1.fname = "dipanshu"
dip1.lname = "chawde"
console.log(dip1.fname)
console.log(dip1.lname)
dip1.displayName()


console.log("----------------------------------------")
// PART 3: Setting Values After Object Creation

adi1.fname = "aditya"
adi1.lname = "masalkar"
console.log(adi1.fname)
console.log(adi1.lname)
adi1.displayName()

console.log("----------------------------------------")
// PART 4: Constructor
//assign valies at the time of object creation

class PersonB {
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    displayName(){
         console.log(this.fname + " " + this.lname)
    }
}

let ru = new PersonB("rucha","gaware")
ru.displayName()
console.log(ru.fname)
console.log(ru.lname)

console.log(ru["fname"])
console.log(ru["lname"])

let sh = new PersonB("shivani","ukhalkar")
sh.displayName()
console.log(sh.fname)
console.log(sh.lname)

// constructor() runs automatically
// Called when new keyword is used
// Used to initialize values
//“Constructor = automatic setup function.”