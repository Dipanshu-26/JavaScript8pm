//  <h1>Change Color</h1>
//  <button id = "button1">Change</button>

let headOne = document.querySelector('h1') 
let buttonChange = document.querySelector("#button1")

buttonChange.addEventListener('click',function(){
    headOne.textContent = "Green"
    headOne.style.color = 'green'
})


//  <h2 id = "head2">What is your Name?</h2>
//     <button id = "button2">Name</button>

let headTwo = document.querySelector('#head2') 
let buttonName = document.querySelector("#button2")

buttonName.addEventListener('click',function(){
    headTwo.textContent = "Dipanshu"
    headTwo.style.color = "violet"
})

//  <h2 id = "head3">What is your Name?</h2>
//     <button id = "button3">Place</button>