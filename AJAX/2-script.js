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

//------------------------------------------------------------------------------------------

function createUser(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("User created")
        },4000)
    })
    return pro
}

function getId(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get ID")
        },2000)
    })
    return pro
}

function getInfo(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get Info")
        },1000)
    })
    return pro
}
// createUser()
// getId()
// getInfo()

//using .then
// createUser().then(function(str){
//     console.log(str)
//     return getId()
// }).then(function(str){
//     console.log(str)
//     return getInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log("error occured")
// }).finally(function(){
//     console.log("i will always get executed...")
// })

// async awit

async function getUserInformation() {
    let one = await createUser()
    console.log(one)
    let two = await getId()
    console.log(two)
    let three = await getInfo()
    console.log(three)
}

getUserInformation()