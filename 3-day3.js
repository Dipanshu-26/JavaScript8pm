//datatype operators


// type 
// primitive datatype    secondary datatype
// type --- > attribute methods 

// type
// introvert      extrovert
// clam            loud
// less outing    more outing
// less social    more social

// human
// properties --> name, color, height,weight
// methods ---> walk(), talk(), think()

// vechile
// properties--> color, type, code 
// methods--> start(),stop()


// bank
// properties--> name, brachn, address
// methods--> deposit(), withdraw(),balance()

let a= -10
console.log(a)
console.log(typeof(a))
//10,10.3,-10.3,10

a="123@abc"
console.log(a)
console.log(typeof(a))
//"dipanshu",'d','#','@','1','123@abc'

a=false
console.log(a)
console.log(typeof(a))
//true, false

//JS is dynamically typed language

console.log("--------------------------------")
// comparison operators
// >,>=,<,<=,==,!=
// ===, !==
// entity ---> true/false

console.log(4 == 4)
console.log(4 == 3)
console.log(4 != 4)
console.log( 4 >3)
console.log(4 > 4)
console.log(4 >= 4)   // > or =
console.log(4 < 5)
console.log(4<=4)
console.log("--------------------------------")

// ===, !==
console.log(4 == '4')   //== checks absolute value does not check type
console.log(4 === '4')  //=== checks absolute value and type also
//        number   string


console.log(4 != '4')    //!= checks absolute value does not check type
console.log(4 !== '4')   //!== checks absolute value and type also
console.log("--------------------------------")

let x=100
console.log(x === 'x')
//        variable x=100     string

console.log(x == 'x')
//       x=100     'x'

// logical operator