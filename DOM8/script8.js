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

let htmlCollectionFr = document.getElementsByClassName('fr')
console.log(htmlCollectionFr)

//program 3
let para1 = document.querySelector('p')
console.log(para1)

let para2 = document.querySelectorAll('p')
console.log(para2)

let para3 = document.getElementsByTagName('p')
console.log(para3)

//program 4
let attr1 = document.querySelector('[name = "para"]')
console.log(attr1)

let attr2 = document.querySelectorAll('[name = "para"]')
console.log(attr2)

let attr3 = document.getElementsByName('para')
console.log(attr3)








