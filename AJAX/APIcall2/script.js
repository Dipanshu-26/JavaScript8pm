//list of user of given page
function getUserInfo(pageno) {
    return fetch(`https://reqres.in/api/users?page=${pageno}`, {
        method: 'GET',
        headers: {
            "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
        }
    }).then(function (res) {
        //console.log(res)
        return res.json()
    }).then(function (res2) {
        //console.log(res2)
        return res2
    })
}

//getUserInfo(2)

//------------------------------------------------------------------
//single user info of given id
function getSingleUser(userId) {
    return fetch(`https://reqres.in/api/users/${userId}`, {
        method: "GET",
        headers: {
            "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
        }
    }).then(function (res) {
        return res.json()
    }).then(function (res2) {
        //console.log(res2)
        return res2
    })
}
console.log("-----------------------------")
//getSingleUser(3)
//-----------------------------------------------------------------------------------
function renderHTML(el) {
    document.writeln(`<h1>${el.first_name}  ${el.last_name}</h1> <br>`)
    document.writeln(`<h1>${el.id}</h1> <br>`)
    document.writeln(`<h1>${el.email}</h1> <br>`)
    document.writeln(`<img src= ${el.avatar}>`)
}


//-------------------------------------------------------------------------------------
// getUserInfo(1).then(function (userList) {
//     //console.log(userList)
//     let id = userList.data[0].id
//     //console.log(id)
//     return getSingleUser(id)
// }).then(function (singleUser) {
//     //console.log(singleUser)
//     //console.log(singleUser.data)
//     renderHTML(singleUser.data)
// })

//--------------------------------------------------------------------------------------

async function getInfo(pageno){
    let userData = await getUserInfo(pageno)
    let userId = userData.data[0].id
    let singleUser = await getSingleUser(userId)
    await renderHTML(singleUser.data)
}

getInfo(2)
