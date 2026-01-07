//map(), filter(), reduce(), forEach()

//given a birthyear find age

//            0   1    2   3
// let byr = [2008,2017,1983,1976]
// console.log(byr[0])
// console.log(byr)
// console.log(byr.length)   //length = 4 

// let age =[]

// //for(inilization, condition, inc/dec){--- stmts----}
// for(let i=0; i < byr.length;i++){                //i=0 ,  1,  2, 3,  4
//     age.push(2026 -byr[i])
// }

// console.log(age)

//-----------------------------------------------
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let byr = [2008,2017,1983,1976]
let ages = byr.map(function(el,inx,arr){      //el = 2008, 2017, 1983, 9176      
    return 2026 - el                          //18, 9, 43,50
})

console.log(ages)

// find marks above 40
// let marks = [20,62,55,99,23,76,34,40,50]
// let above40 = []

// //i++ ==> i = i+1   i-- ==> i=i-1 
// for(let i =0; i<marks.length;i++){    //marks = 20 ,62 , 55,99,23,76,34,40,50
//     if(marks[i] > 40){               // 62  55  99  76  50
//         above40.push(marks[i])
//     }
// }
// console.log(above40)


// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let marks = [20,62,55,99,23,76,34,40,50]

let q2 = marks.filter(function(el,inx, arr){
    return el > 40
})

console.log(q2)

//below or equal 40

let q3 = marks.filter(function(el){
    return el <=40
})
console.log(q3)

// transaction  deposit and withdraw

let transaction = [100, -200, 50, -70, 76,-44,100,-34]

let deposit = transaction.filter(function(el){
    return el > 0
})
console.log(`deposit = ${deposit}`)
console.log(deposit)

let withdrow = transaction.filter(function(el){
    return el <0
})
console.log(`withdrow = ${withdrow}`)
console.log(withdrow)

console.log("----------------------------------------")
// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)

//         0  1  2  3  4  5
// let arr= [11,22,33,44,55,66]
// let total = 0
// for(let i=0;i<arr.length;i++){     //i=0 , 1  ,2  total=0,11,33....
//     total = total + arr[i]         //total = 0 + 11 =11,  total = 11+22= 33, total = 33+33 =66 .....
// }

// console.log(total)

let arr= [11,22,33,44,55,66]

let addn = arr.reduce(function(acc,el,inx,arr){
        return el+acc
},0)

console.log(addn)


//forEach()
// Welcome, Dipanshu !!!
//               0        1      2       3          last index = 3   but length= 4
// let names = ['dipanshu','neel','nitin','tanish']     // i<names.lenth  (i<4)  =3    ===> i<=names.length-1  (i<=4-1)

// for(let i =0;i<=names.length-1;i++){
//     console.log(`Welcome, ${names[i]} !!!`)
// }

let names = ['dipanshu','neel','nitin','tanish']

names.forEach(function(el,inx,arr){       //el = 'dipanshu','neel','nitin','tanish'
    console.log(`Welcome, ${el} !!!`)
})

//object 
// properties
// methods 
// action
// return 

// Array 
// methods 
// action
// return 

// person 
// properties : name,height,weight
// methods :walk(), talk()
// return : healthyweight, motivation , decision