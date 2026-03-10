//program1 

// function addA(){
//     console.log("hello addA")
// }

// function addB(){
//     console.log("hello addB")
// }
// addA()
// addB()
// addA()

//------------------------------------------------

//setTimeout() is a JavaScript Web API function used to execute a function after a specified delay (in milliseconds).
//program 2 

// function addC(){
//     setTimeout(function(){
//         console.log("hello addC")
//     },2000)
// }

// function addD(){
//     setTimeout(function(){
//         console.log("hello addD")
//     },4000)
// }

// addD()
// addC()

//-----------------------------------------------------------
//program3 
//sync (Java script is syncronus)
//to make java script code asyncronous use setTimeout function

// function getInfo(){
//     setTimeout(function(){
//         console.log("create user")
//     },4000)

//     setTimeout(function(){
//         console.log("get user ID")
//     },2000)

//     setTimeout(function(){
//         console.log("get user info")
//     },1000)
// }

// getInfo()

//-------------------------------------------------------------

//above will execute asyncronulys but logically user should be created first then get id then get info 
//one solution is hell function 
//call back hell function is tightely coupled and can not use sub functions seperately


// function getInfo(){
//     setTimeout(function(){
//         console.log("create user")
//         setTimeout(function(){
//             console.log("get user ID")
//             setTimeout(function(){
//                 console.log("get user info")
//             },1000)
//         },2000)
//     },4000)
// }

// getInfo()
//-----------------------------------------------------------

//solution is promises in javaScript

//promise has 2 states ---> pending ---> resolve ----> reject

// let pro = new Promise(function(resolve,reject){
//     let a=100
//     let b=200
//     if(a>b){
//         resolve("hi")
//     }
//     else{
//         reject("bye")
//     }
// })

//call promise

// pro.then(function(str){
//     console.log(`i am resolve ${str}`)
// },function(str){
//     console.log(`i am reject ${str}`)
// })

//syntax pro.then(function_resolve(parameter){.....},function_reject(parameter){......})

//control flow----- pro.will execute promise first then code in return block 
//in promise if condition satisfy resolve block esecuted and then control comes to first function of .then block
//if condition false reject and second function of .then block

//---------------------------------------------------------------------------------------------------------------------------

//program6
//then and catch
//catch is used when we need to write generic reject 

// let pro = new Promise(function(resolve,reject){
//     let a=100
//     let b=20
//     if(a>b){
//         resolve([11,22,33,44])
//     }
//     else{
//         reject([1,2,3,4])
//     }
// })

// pro.then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// })

//------------------------------------------------------------------------------

// let pro = new Promise(function(resolve,reject){
//     let nm = "adipanshu"
//     if(nm.startsWith('d')){
//         resolve("starts with d")
//     }
//     else {
//         reject("does not start with d")
//     }
// })

// //consume
// //pro.then(function_resolve(ret_str){......},function_reject(ret_str){.....})
// pro.then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// })
//------------------------------------------------------------------------------

let pro = new Promise(function(resolve,reject){
    let a=100
    let b=200
    if(a>b){
        resolve("hi")
    }
    else{
        reject("bye")
    }
})

pro.then(function(str){
   return `${str} !!! Dipanshu`
}).then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
}).finally(function(){
    console.log('I will always get executed')
})