//promise combinators
// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()

//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

//promise.any()
//it will exectue till it get first resolve 

//promise.allsettled()
//it will execute all and return whatever is result in array..
//if resolve return output ..if reject return reason 

//promise.race()
//it will race betweenthe promises and returns first executed promise


//Promise.all()----------------------------------

// async function PromiseAll() {
//     let pro1 = await Promise.all([
//         Promise.resolve("hello1"),
//         Promise.resolve("hello2"),
//         Promise.reject("bye1"),
//         Promise.resolve("hello3")
//     ])
//     console.log(pro1)
    
// }
// PromiseAll()

//Promise.any()----------------------------------

// async function PromiseAny() {
//     let pro2 = await Promise.any([
//         Promise.reject("bye1"),
//         Promise.resolve("resolved hello1"),
//         Promise.reject("bye2"),
//         Promise.reject("bye3"),
//         Promise.resolve("resolved hello3")
//     ])
//     console.log(pro2) 
// }
// PromiseAny()

//Promise.allSettled()----------------------------------
// async function PromiseAllSettled() {
//     let pro3 = await Promise.allSettled([
//         Promise.reject("bye1"),
//         Promise.resolve("resolved hello1"),
//         Promise.reject("bye2"),
//         Promise.reject("bye3"),
//         Promise.resolve("resolved hello3")
//     ])
//     console.log(pro3) 
// }
// PromiseAllSettled()

//Promise.race()----------------------------------

function task1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("resolve 1")
        },3000)
    })
}

function task2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("resolve 2")
        },4000)
    })
}

function task3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("reject 3")
        },1000)
    })
}

function task4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("reject 4")
        },1000)
    })
}

//---------------------------------------------------
async function PromiseRace() {
    let pro4 = await Promise.race([
        task1(),
        task2()
    ])
    console.log(pro4)
}
//PromiseRace()

//----------------------------------------------
async function PromiseAll() {
    let pro4 = await Promise.all([
        task1(),
        task2(),
        task3(),
        task4()
    ])
    console.log(pro4)
}
//PromiseAll()

//----------------------------------------------
async function PromiseAny() {
    let pro4 = await Promise.any([
        task3(),
        task4(),
        task1(),
        task2(),
       
    ])
    console.log(pro4)
}
//PromiseAny()

//----------------------------------------------
async function PromiseAllSettled() {
    let pro4 = await Promise.allSettled([
        task3(),
        task4(),
        task1(),
        task2(),
       
    ])
    console.log(pro4)
}
//PromiseAllSettled()

//----------------------------------------------
async function PromiseRace() {
    let pro4 = await Promise.race([
        
        task1(),
        task2()
       
    ])
    console.log(pro4)
}
PromiseRace()