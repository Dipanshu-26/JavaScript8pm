//method borrowing,call, apply, and bind is to show that they are used to control the value of "this" when executing a function.

// let dip = {
//     fname : "dipanshu",
//     lname : "chawde",
//     display : function(){
//         console.log(this.fname + " " + this.lname)
//     }
// }

// let adi = {
//     fname : "aditya",
//     lname : "masalkar"
// }

//dip.display()

//adi.display()

//1. method borrowing------------
// adi.display = dip.display 
// adi.display()

//call()
//call() executes the function immediately and allows us to set this.
// let dip = {
//     fname : "dipanshu",
//     lname : "chawde",
//     display : function(){
//         console.log(this.fname + " " + this.lname)
//     },
//     display2 : function(city, country){
//         console.log(this.fname + " " + this.lname + " " + city + " " + country)
//     }
// }

// let adi = {
//     fname : "aditya",
//     lname : "masalkar"
// }

// let ru= {
//     fname : "rucha",
//     lname : "gaware"
// }

// dip.display.call(adi)
// dip.display.call(ru)

//call with parameter
let shivani = {
    fname : "shivani",
    lname : "ukhalkar",
    display:function(city,country){
        console.log(this.fname+ " "+this.lname + " "+city + " "+ country)
    }
}

let tanish = {
    fname : "tanish",
    lname : "chawde"
}


shivani.display.call(tanish,"pune","india")

//apply ()
// apply() works exactly like call().
// The only difference:arguments are passed as an array

let neel = {
    fname:"neel",
    lname:"chawde"
}
shivani.display.call(neel,["banglore"],["india"])


//bind()
let dip = {
    fname : "dipanshu",
    lname : "chawde",
    display : function(){
        console.log(this.fname + " " + this.lname)
    },
    display2 : function(city, country){
        console.log(this.fname + " " + this.lname + " " + city + " " + country)
    }
}

let adi = {
    fname : "aditya",
    lname : "masalkar"
}

let ru= {
    fname : "rucha",
    lname : "gaware"
}

//bind() does not execute immediately. It returns a new function with fixed this.

let adiBind = dip.display.bind(adi)
adiBind()

let ruBind = dip.display2.bind(ru,"pune","india")
ruBind()