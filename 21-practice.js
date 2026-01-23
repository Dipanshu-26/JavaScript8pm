// Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

let a1 = [1, 4, -2, 8, -7, -10, 8, 5, 3, -2]   //29
let sum = 0
for (let i = 0; i < a1.length; i++) {      // a[i] 1, 4,-2,8,-7,-10,8....
    if (a1[i] > 0) {
        sum = sum + a1[i]         // sum = 0+1, 1+4,  5+8  ,13+8....        
    }
}


console.log(sum)
console.log('-------------------------------------------------')
// Write a function to check if a given array elemenyts are  even or odd.
//[  'odd',  'even',  'odd',  'even',  'even', 'even',  'even']
// let a2 = [3,6,77,8,10,64,2]

// for(let i=0;i<a2.length;i++){
//     if(a2[i]%2 == 0){
//         console.log(`${a2[i]} = even`)
//     }
//     else{
//         console.log(`${a2[i]} = odd`)
//     }
// }
//------------------------------------------

// let a2 = [4,3,6,77,8,10,64,2]
// let na2 = []
// for(let i=0;i<a2.length;i++){
//     if(a2[i]%2 == 0){
//         //console.log(`${a2[i]} = even`)
//         na2.push('even')
//     }
//     else{
//         //console.log(`${a2[i]} = odd`)
//         na2.push('odd')
//     }
// }
// console.log(na2)
//[  'odd',  'even',  'odd',  'even',  'even', 'even',  'even']

//------------------------------------------
console.log('---------newArr----------------------------------------')
let a2 = [4, 3, 6, 77, 8, 10, 64, 2]
let a3 = [44, 33, 66, 77, 8, 10, 64, 2]

function evenOdd(arr) {
    let na2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            //console.log(`${a2[i]} = even`)
            na2.push('even')
        }
        else {
            //console.log(`${a2[i]} = odd`)
            na2.push('odd')
        }
    }
    return na2
}

let newArr = evenOdd(a3)

console.log(newArr)
//[  'odd',  'even',  'odd',  'even',  'even', 'even',  'even']

//console.log('-------------------------------------------------')
// Write a function that takes a string as input and returns the reverse of that string.
let str = "dipanshu"
let rev =""
//a+a = aa
for(let i=0;i<str.length;i++){      // d, i,p....
    rev = str[i]+rev               //d , id, pid,....
}
console.log(rev)

console.log(str.split("").reverse().join(""))

// console.log('-------------------------------------------------')
// Write a function to check if a given string is a palindrome (reads the same backward as forward).
// nitin 

let str1 = "nitin"
let rev1 =""
//a+a = aa
for(let i=0;i<str1.length;i++){      // d, i,p....
    rev1 = str1[i]+rev1               //d , id, pid,....
}

if(str1 == rev1){
    console.log("is palindrome")
}
else{
    console.log("is not a palindrome")
}

console.log("---------------------------------")
let revStr = str1.split("").reverse().join("")

if(str1 == revStr){
    console.log("is palindrome")
}
else{
    console.log("is not a palindrome")
}








// console.log('-------------------------------------------------')
// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.


// console.log('-------------------------------------------------')
// Write a function to find the maximum number in an array of numbers.


// console.log('-------------------------------------------------')
// Write a function to count the number of vowels (a, e, i, o, u) in a given string.


// console.log('-------------------------------------------------')
// Write a function to check if a given string is a palindrome (reads the same backward as forward).

// console.log('-------------------------------------------------')
// Write a function to capitalize the first letter of each word in a given sentence.

// console.log('-------------------------------------------------')
// Write a function to reversethe string in a given sentence.


// console.log('-------------------------------------------------')
// Write a function to reverse words in a given sentence.

// console.log('-------------------------------------------------')
// program to delete duplicate charactor from string

// console.log('-------------------------------------------------')
// Write a function to reverse words in a given sentence.

// console.log('-------------------------------------------------')
// Write a function to reversethe string in a given sentence

// console.log('-------------------------------------------------')
// Write a function to capitalize the first letter of each word in a given sentence.