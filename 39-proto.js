

let num = [11,22,33,44]

let obj = {
    name : "dipanshu",
    lname : "chawde",
    city : "pune",
    getInfo : function (){
        console.log(this.name + " from " +this.city)
    }
}

//write in browser 
// obj.__proto__
// arr.__proto__
// Array.prototype
// arr
// arr.__proto__.__proto__
// arr.__proto__.__proto__.__proto__
// null
// arr → Array.prototype → Object.prototype → null


// obj.__proto__
// Object.prototype
// obj.__proto__.__proto__
// null


//prototype concept
// ⭐ What is Prototype in JavaScript?
// Every JavaScript object has a hidden link to another object called its prototype.
// This forms a prototype chain used for inheritance.
// Example:    names → Array.prototype → Object.prototype → null
// So arrays automatically have:push(),pop(),includes(),map(),filter(), your custom hello()

//num ==> array==>Object==>null

