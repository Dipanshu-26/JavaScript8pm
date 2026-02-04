//object literals

let dip = {
    fname: "dipanshu",
    lname: "chawde",
    displayName: function () {
        console.log(this.fname + " " + this.lname)
    }
}

console.log(dip.fname)
console.log(dip.lname)
dip.displayName()


let adi = {
    fname: "aditys",
    lname: "masalkar",
    displayName: function () {
        console.log(this.fname + " " + this.lname)
    }
}

console.log(adi.fname)
console.log(adi.lname)
adi.displayName()

//-----------------------------------------------
//class : blue print 

class Person {
    fname = undefined
    lname = undefined
    displayName() {
        console.log(this.fname + " " + this.lname)
    }
}

//create objects : intance of class

dip1 = new Person()
adi1 = new Person()

console.log(dip1.fname)
console.log(dip1.lname)
dip1.displayName()

//assigning values
dip1.fname = "dipanshu"
dip1.lname = "chawde"

console.log(dip1.fname)
console.log(dip1.lname)
dip1.displayName()

adi1.fname = "aditya"
adi1.lname = "masalkar"

console.log(adi1.fname)
console.log(adi1.lname)
adi1.displayName()

//------------------------------------------------
//constructor

class PersonB {
    constructor(fn, ln) {
        this.fname = fn
        this.lname = ln
    }
    displayName() {
        console.log(this.fname + " " + this.lname)
    }
}

let ru = new PersonB("rucha", "gaware")

console.log(ru.fname)
console.log(ru.lname)
ru.displayName()

let sh = new PersonB("shivani", "ukhalkar")
console.log(sh.fname)
console.log(sh.lname)
sh.displayName()

console.log("-----------------------------------------")
//---------------------------------------------------------
// PART 5: Getter & Setter (Encapsulation Concept)
class PersonC {
    setFirstName(fn) {
        this.fname = fn
    }
    setLastName(ln) {
        this.lname = ln
    }
    getFirstName() {
        return this.fname
    }
    getLastName() {
        return this.lname
    }
}

let obj1 = new PersonC()

obj1.setFirstName("neel")
obj1.setLastName("chawde")

console.log(obj1.getFirstName())
console.log(obj1.getLastName())

let obj2 = new PersonC()

obj2.setFirstName("rajasi")
obj2.setLastName("gaware")

console.log(obj2.getFirstName())
console.log(obj2.getLastName())

// Why Needed
// Control how data is set
// Validation can be added later
// Data protection

//---------------------------------------------------------------

// setting value using get and set keyword

//Setter name → firstN , Actual property used → firstName
//Since the names are different, there is no infinite loop, so the code runs fine.

class PersonD{
    set firstName(fn){
        this.fname =fn
    }
    set lastName(ln){
        this.lname = ln
    }
    get lastN(){
        return this.lname
    }
    get firstN(){
        return this.fname
    }
}

let ob = new PersonD()

ob.firstName = "rohit"
ob.lastName = "sharma"
console.log(ob.firstN)
console.log(ob.lastN)

console.log(ob.fname)
console.log(ob.lname)