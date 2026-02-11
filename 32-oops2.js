//single inheritance 

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

// class Teacher extends Student {
//   constructor(fn, ln, dob,sal) {
//       super(fn,ln,dob)
//       this.salary = sal
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let dip = new Teacher("dipanshu","chawde","26-11-83",10000)
// dip.displayName()
// dip.displaySalary()
// let st = new Student("neel","chawde","17-09-2017")
// st.displayName()

//Multilevel Inheritance : Multilevel inheritance means a class is derived from another derived class.
//GrandFather → Father → Daughter

// class GrandFather{
//     constructor(fn,ln){
//         this.fname = fn
//         this.lname = ln
//     }
//     displayGName(){
//         console.log("Grand Father Name " +this.fname + " " + this.lname)
//     }
// }

// class Father extends GrandFather{
//     constructor(fn, ln, ffn){
//         super(fn,ln)
//         this.ffname = ffn
//     }
//     displayFName(){
//         console.log("Father Name " +this.ffname + " " + this.lname)
//     }
// }

// class daughter extends Father{
//     constructor(fn, ln,ffn,dn){
//         super(fn,ln,ffn)
//         this.dname = dn
//     }
//     displayName(){
//         console.log("daughter Name " +this.dname + " " + this.lname)
//     }
// }


// let obj1 = new daughter("gopalrao","masalkar","niranjan","dipanshu")
// let obj2 = new daughter("rajesh","rao","mahesh","suresh")
// obj1.displayName()
// obj1.displayFName()
// obj1.displayGName()

// console.log(obj1.dname)
// console.log(obj1.ffname)
// console.log(obj1.fname)
// console.log(obj1.lname)
// console.log("----------------------------------")

// obj2.displayName()
// obj2.displayFName()
// obj2.displayGName()

// console.log(obj2.dname)
// console.log(obj2.ffname)
// console.log(obj2.fname)
// console.log(obj2.lname)

console.log("----------------------------------")
//Hierarchical Inheritance : Hierarchical inheritance means multiple child classes inherit from the same parent.

//mother - daughter - son

class Mother { 
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    displayMName(){
        console.log("mother name =  " +this.fname + " " + this.lname)
    }
}

class Daughter extends Mother{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
     displayDName(){
        console.log("daughter name =  " +this.dname + " " + this.lname)
    }
}

class Son extends Mother{
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
     displaySName(){
        console.log("son name =  " +this.sname + " " + this.lname)
    }
}
//                   fn         ln      sn
let sn = new Son("dipanshu","chawde","tanish")
//                    fn         ln      dn
let dt = new Daughter("dipti","masalkar","rucha")

sn.displayMName()
sn.displaySName()
console.log("----------------------------------")

dt.displayDName()
dt.displayMName()



