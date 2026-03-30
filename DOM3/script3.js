//<h1 id="one" class="cone" name="nm" >Hello</h1>

//css selector
let byId = document.querySelector("#one")
let byClass = document.querySelector(".cone")
let byAtt =document.querySelector('h1[name="nm"]')
let byTag = document.querySelector('h1')

// byId.addEventListener('click',function(){
//     byId.style.color = 'red'
//     byId.textContent = 'Bye'
// })

byClass.addEventListener('click',function(){
    byClass.style.color = 'red'
    byClass.textContent = 'Bye'
})