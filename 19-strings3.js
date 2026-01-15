//strings

//    0   1   2   3   4   5   6    7   8    9      10              //last index is 10 but char counrt is 11
//    a   h   i   l   y   a   n   a    g    a      r

let city = "Ahilyanagar"

console.log(city.indexOf('a'))
console.log(city.indexOf('A'))
console.log(city.charAt(3))
console.log(city.charCodeAt(3))


//seaching and checking

console.log(city.includes("Ahi"))
console.log(city.includes("ahi"))
console.log(city.includes("yan"))

console.log(city.startsWith('Ahi'))
console.log(city.startsWith('ahi'))

console.log(city.endsWith('r'))
console.log(city.endsWith('nagar'))


//    0   1   2   3   4   5   6    7   8    9      10              //last index is 10 but char counrt is 11
//    a   h   i   l   y   a   n   a    g    a      r
console.log(city.indexOf('a'))
console.log(city.lastIndexOf('a'))

let info ="i am learning javascript and javascript is great."

//replacing word
console.log(info.replaceAll("javascript", "python"))

console.log(info)

let city2 = "MuMBaI"

console.log(city2.toUpperCase())
let q1= city2.toLowerCase()
console.log(q1)

//trim(), trimStart(),trimEnd()
city = "goa"

console.log(city.length)

city = "   goa    "

console.log(city.length)

console.log(city)
console.log(city.trim())
console.log(city.trim().length)   //"   goa    "  ==> "goa" ==> 3

console.log(city.trimStart())
console.log(city.trimStart().length)

console.log(city.trimEnd())
console.log(city.trimEnd().length)


city = "wardha"

console.log(city.padStart(10,0))
console.log(city.padStart(10,'@'))
console.log(city.padStart(10,' '))

console.log(city.padEnd(10,'$'))

let a= 'Dipanshu'
console.log(a.repeat(3))