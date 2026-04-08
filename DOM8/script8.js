//<h1 id = "one">Fruits</h1>
   // <p name = "para">Dipanshu</p>
   // <p name = "para">Chawde</p>
    //<ul>
      //  <li class = "fr">Apple</li>
        //<li class = "fr">Banana</li>
        //<li class = "fr">Grapes</li>
        //<li class = "fr">Mango</li>
        //<li class = "fr">Papaya</li>
    //</ul>

//program 1
let frId = document.querySelector('#one')
console.log(frId)

let frId2 = document.getElementById('one')
console.log(frId2)

//program 2 
let byClassName = document.querySelector(".fr")        //first matching
console.log(byClassName)

let byClassNameAll = document.querySelectorAll(".fr")
console.log(byClassNameAll)

for(let i=0;i<byClassNameAll.length;i++){
    if(byClassNameAll[i].textContent == "Grapes"){
    byClassNameAll[i].style.color="red"
    }
}