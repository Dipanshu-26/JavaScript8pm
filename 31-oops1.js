//two class student , teacher

// class Student {
//     constructor(fn, ln, dob) {
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }
//     displayName() {
//         console.log(this.fname + " " + this.lname)
//     }
// }

// class Teacher {
//     salary = 10000
//     constructor(fn, ln, dob) {
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }
//     displayName() {
//         console.log(this.fname + " " + this.lname)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let s1 = new Student("Ms", "Dhoni","01-01-2008")
// let t1 = new Teacher("rahul","darvid","01-10-1980")

// s1.displayName()
// t1.displayName()
// t1.displaySalary()

//---------------------------------------------------------------------------------
//oops concepts 

// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher

//single inheritance, only parent having constructor
//parent class
// class Student {
//     constructor(fn, ln, dob) {
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }
//     displayName() {
//         console.log(this.fname + " " + this.lname + " " + this.dob)
//     }
// }

// //child class
// class Techaer extends Student {
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// // extends → creates IS-A relationship
// // Teacher IS A Student
// // Teacher automatically gets:firstName, lastName, dob, displayName()
// console.log("------------------")
// let s2 = new Student("ms","dhoni","01-01-2008")
// s2.displayName()

// let t2 = new Techaer("rahul","dravid","10-10-1980")
//t2.salary = 50000
// t2.displayName()
// t2.displaySalary()

console.log("------------------------------------")
//-----------------------------------------------------------
//single inheritance, parent and child both having constructor

class Student {
    constructor(fn, ln, dob) {
        this.fname = fn
        this.lname = ln
        this.dob = dob
    }
    displayName() {
        console.log(this.fname + " " + this.lname + " " + this.dob)
    }
}

class Teacher extends Student {
    constructor(fn,ln,dob,sal){
        super(fn,ln,dob)
        this.salary = sal
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let s2 = new Student("ms","dhoni","01-01-2008")
s2.displayName()

let t2 = new Teacher("rahul","dravid","10-10-1980",20000)
t2.displayName()
t2.displaySalary()


// super() (VERY IMPORTANT)
// “super() is used to call the parent constructor.”

// Rules:
// super() must be called before this
// Without super(), JavaScript throws an error
// super() passes data to parent

//Child object can access both parent and child methods.