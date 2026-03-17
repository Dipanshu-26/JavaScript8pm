function getUserInfo(pageno){
    fetch(`https://reqres.in/api/users?page=${pageno}`,{
        method : 'GET',
        headers : {
            "x-api-key" : "reqres_7719223fd6664035a09558d2a98b01d7"
        }
    }).then(function(res){
        //console.log(res)
        return res.json()
    }).then(function(res2){
        console.log(res2)
    })
}

getUserInfo(2)

//------------------------------------------------------------------

function getSingleUser(userId){
    fetch(`https://reqres.in/api/users/${userId}`,{
        method:"GET",
        headers:{
             "x-api-key" : "reqres_7719223fd6664035a09558d2a98b01d7"
        }
    }).then(function(res){
        return res.json()
    }).then(function(res2){
        console.log(res2)
    })
}
console.log("-----------------------------")
getSingleUser(3)