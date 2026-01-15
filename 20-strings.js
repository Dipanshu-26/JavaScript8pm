//strings

let str = "I am learning javascript and i love javascript"

console.log(str.replaceAll("javascript","python"))

console.log(str.replace("javascript","python"))

//join(), split()

//split()=== string method returns array
let a="dipanshu chawde"
//let b=["nitin","chawde"]

let sp = a.split(" ")   //[ 'dipanshu', 'chawde' ]
console.log(sp)

a="dipanshu@chawde@neel@nitin@tanish"
let sp2=a.split("@")
console.log(sp2)

a="dipanshu@gmail.com"
let sp3=a.split("@")
console.log(sp3)      //[ 'dipanshu', 'gmail.com' ]
console.log(sp3[0])   //       0           1

//join()  == array method returns string
let b=["nitin","chawde"]
let j1 = b.join(" ")
console.log(j1)
console.log(typeof(j1))


console.log("---------------------------")
//method chaining

let st = "DipAnshU ChAWdE"

let op = st.toLowerCase().split(" ").some(function(el){
//   "DipAnshU ChAWdE"  "dipanshu chawde"     ["dipanshu", "chawde"]
    return el == "dipan"
})

console.log(op)


//reverse()

let q1 = [1,2,3,4,5,6]
//q1 = "dipanshu"
console.log(q1.reverse())

// print reverse of string

q1 = "dipanshu"

console.log(q1.split("").reverse().join(""))

//without using string and array functions
//a+b = ab  ==>  ba

let rev=""
for(let i=0; i<q1.length;i++){       
    rev = q1[i] + rev          //d ==>  id ==>  pid ==>  a + pid  ==> napid ==> snapid ==> hsnapid ==> uhsnapid

}
console.log(rev)



