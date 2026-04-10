//<h1 id = "one">Fruits</h1>
// <p id= "one" class = "two" name = "para">Dipanshu</p>
// <p name = "para">Chawde</p>
// <p name = "para">Pune</p>
// <ul>
//     <li class = "fr">Apple</li>
//     <li class = "fr">Banana</li>
//     <li class = "fr">Grapes</li>
//     <li class = "fr">Mango</li>
//     <li class = "fr">Papaya</li>
// </ul>


let para1 = document.querySelector('p')

//attribute retrive
console.log(para1)

//update

// para1.classList.add("five")
// console.log(para1)

// //remove 
// para1.classList.remove("five")
// console.log(para1)

para1.classList.toggle("six")
console.log(para1)
para1.classList.toggle("six")
console.log(para1)
para1.classList.toggle("six")
console.log(para1)

//atttribyte retrive
console.log(para1.getAttribute("id"))
console.log(para1.getAttribute("class"))
console.log(para1.getAttribute("name"))

//add new attribte
para1.setAttribute('data-cy', 'test-id1')
console.log(para1)

para1.setAttribute('data-cy', 'test-id2')
console.log(para1)

//remove 
para1.removeAttribute('class')
console.log(para1)

para1.removeAttribute('id')
console.log(para1)

para1.removeAttribute('name')
console.log(para1)