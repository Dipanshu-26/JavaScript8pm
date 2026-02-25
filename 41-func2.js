// //function as parameter

// let add = (x,y) => x+y 
// let q1 = add(12,3)
// console.log(q1)

// console.log(add)

// function addition(fn,a,b){    //fn = add(add = (x,y) => x+y)   a=100   b= 5
//     let q2 = fn(a,b)          // add(100,5)   q2 = 105
//     return q2                 //105
// }
// //                 fn   a  b
// let q3 = addition(add, 100,5)
// console.log(q3)

// //--------------------------------------------------------

// //function as return

// // function substraction(){
// //     return (x,y) => x-y
// // }

// // let q4 = substraction()            // q4 = (x,y) => x-y
// // let q5 = q4(22,2)                  //q4 = (22,2) => 22-2 q5 = 20
// // console.log(q5)



// function substraction(){
//     let add = function(x,y){
//         return x-y
//     }
//     return add

// }

// let q4 = substraction()            // q4 = (x,y) => x-y
// let q5 = q4(22,2)                  //q4 = (22,2) => 22-2 q5 = 20
// console.log(q5)

//---------------------------------------------------------------------
//lexical scope

function additionA(){
    let x=20
    let y=10
    console.log(x+y)
    function additionB(){
        //additionC()   // Cannot access 'a' before initialization
        let a=30
        additionC()
        console.log(x+y+a)  
        function additionC(){
            let b=40
            console.log(x+y+a+b)
        }
        additionC()
    }
    additionB()
    //additionC()
    
}

additionA()

// additionC()
// additionB()