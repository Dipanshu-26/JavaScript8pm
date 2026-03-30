//<h1 id="id1" class="c1" name="nm" >Dipanshu Chawde</h1>

//get element by id (#)

let byId = document.querySelector("#id1")
console.log("by id = " ,byId)

//get by class (.)
let byClass = document.querySelector(".c1")
console.log("by class= ",byClass)

//get by name attribute
let byName = document.querySelector('[name="nm"]')
console.log("by name= ",byName)

//by tag
let byTag = document.querySelector('h1')
console.log("by tag= ",byTag)

//by tag and attribute
let byTagAtt = document.querySelector('h1[name="nm"]')
console.log("by tag and attribute= ",byTagAtt)