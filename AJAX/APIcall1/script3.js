let userButton = document.querySelector('button')

userButton.addEventListener("click",function(){
      getUserInfo(2)
})

function getUserInfo(pageno){
    fetch(`https://reqres.in/api/users?page=${pageno}`,{
        method : "GET",
        headers:{
            "x-api-key" : "reqres_7719223fd6664035a09558d2a98b01d7"
        }
}).then(function(response){
    return response.json()
}).then(function(response){
    response.data.forEach(function(el) {
        document.writeln(`<h1>${el.id}</h1> <br>`)
        document.writeln(`<h1>${el.email}</h1> <br>`)
        document.writeln(`<h1>${el.first_name}  ${el.last_name}</h1> <br>`)
        document.writeln(`<img src=${el.avatar}`)
    });
})

}