//array in JS
//An array is a list used to store multiple values in a single variable.


// let a="dipanshu"
// let b="neel"
// let c="tanish"
// let d="nitin"

let names=["dipanshu","neel","tanish","nitin"]
//             0        1        2      3

console.log(names[0])
console.log(names[1])
console.log(names[2])

console.log(names)

let numbers = [11,22,33,44,55]
//             0   1  2  3  4    total = 5
console.log(numbers[2])
console.log(numbers[4])

let info=['virat','koholi',22,10,true]

console.log(info[0])
console.log(info[5])

//update

//          0         1         2       3          4
let city=['pune','bangalore','delhi','kolkota','nagpur']
console.log(city)

city[0]='mumbai'
console.log(city)

city[3]='jaipur'
console.log(city)

city[4]='panji'
console.log(city)

city[6]='nagar'
console.log(city)

// [
//   'mumbai',
//   'bangalore',
//   'delhi',
//   'jaipur',
//   'panji',
//   <1 empty item>,
//   'nagar'
// ]

//----------------------------------------------


let a =[]
a[1] = 'x'

console.log(a)     //[ <1 empty item>, 'x' ]
console.log(a[0])
console.log(a)
console.log("-------------")

let b =[undefined]
console.log(b)

b[0]=1
b[1]=undefined
console.log(b)

//----------------------------------------------
let num=[111,222,333,444,555,666]
//        0   1   2  3    4    5   total =6

console.log(num[0])

//looping 
console.log("-------------")
console.log(num.length)   //total number of elements
//               6
for(let i=0;i<num.length;i++){        //i=  0   1     2    3     4      5     6(false)
    console.log(num[i])                  //111  222  333   444   555   666
}

console.log("-------------")

let fruits = ['mango','banana','papaya','grapes','apple']     //length=5

//  inilization   condition    inc/dec
//             i<=4

for(let i=0; i<=fruits.length-1;i++){     // i=0   1   2   3     4    5 (false)
    //console.log(i)
    //console.log(fruits[i])
    console.log(i, fruits[i])
}

//while loop
//inilization
// while(condition)
// stmts 
// inc/dec

fruits = ['mango','banana','papaya','grapes','apple'] 

let i=0
while(i<fruits.length){
    console.log(fruits[i])
    i++
}

console.log("-------------")
//print array backword
//            0      1        2        3        4
fruits = ['mango','banana','papaya','grapes','apple'] 

//      i=4
for(let i= fruits.length-1;i>=0;i--){
    //console.log(i)            //index
    console.log(fruits[i])    //elements
}


