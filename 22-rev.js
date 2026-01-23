
//    0   1   2  3   4   5   6   7      index 
//    d   i  p   a   n   s   h   u   length = 8
// let str="dipanshu"
// let rev= ""
// console.log(str.length)

// for(let i=0;i<=str.length;i++){     //i=0    1,2,3,4,5,6,7,8  
//     rev= str[i]+rev                 // d   id   pid    apid  napid  snapid  hnapid  uhsnapid   undefineduhsnapid
// }
// console.log(rev)

// //rev = "undefineduhsnapid"
// rev = ""
// for(let i=0;i<=str.length-1;i++){     //i=0    1,2,3,4,5,6,7,8  
//     rev= str[i]+rev                 // d   id   pid    apid  napid  snapid  hnapid  uhsnapid   undefineduhsnapid
// }
// console.log(rev)

//-----------------------------------------------------------

//arrays

//           0          1      2        3
let arr = ["dipanshu","nitin","neel","tanish"]

console.log(arr[1])

//  inilization   condition  inc/dec
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


//  inilization   condition  inc/dec
let i=0
while(i<arr.length){
    console.log(arr[i])
    i++
}

let a=['a','b','c','d','e','f']

let q1 = a.push(11)
console.log(q1)
console.log(a)

let q2 = a.unshift(22)
console.log(q2)
console.log(a)

let q3 = a.pop(11)
console.log(q3)
console.log(a)

let q4 = a.shift(11)
console.log(q4)
console.log(a)

let rev = a.reverse()
console.log(rev)

console.log("------------------------------------------")

//forEach()

a=['a','b','c','d','e','f']

a.forEach(function(el,ind,arr){
    console.log(el)
    console.log(ind)
    console.log(arr)
})

console.log("------------------------------------------")
//map

birthyear = [2024,2008,1983,1999,2000]
age=[]

for(let i=0;i<birthyear.length;i++){
    age.push(2026-birthyear[i])
}
console.log(age)

age2 = birthyear.map(function(el,ind,arr){
    return 2026-el
})

console.log(age2)

console.log("------------------------------------------")

//filter

let marks=[24,56,78,99,100,54,76,66,45,33]
let above40 = []
for(let i=0;i<marks.length;i++){
    if(marks[i]>40){
        above40.push(marks[i])
    }
}
console.log(above40)

let above402 = marks.filter(function(el){
    return el>40
})
console.log(above402)

console.log("------------------------------------------")

total = 0
for(let i=0;i<marks.length;i++){
    total=total+marks[i]
}
console.log(total)

total2 = marks.reduce(function(acc, el, ind,arr){
    return acc+el
},0)
console.log(total2)