let ulList = document.querySelector("ul")
let txtIp = document.querySelector("input")
let btn = document.querySelector("#btn1")

//step 1 
//function to add input
btn.addEventListener('click',function(){
    console.log("one")
    let newtxt = txtIp.value
    let newli = document.createElement('li')
    newli.textContent = newtxt
    //function to add button in li
    createButton(newli)
    //append new li in ul list
    ulList.appendChild(newli)
    txtIp.value=""
    console.log("three")
})


//step2
//function to add buttons
//<button class="remove">Remove</button>
//<button class="up">UP</button>
//<button class="down">Down</button>

function createButton(li){
    console.log("two")
    //remove 
    let rmButton = document.createElement('button')
    rmButton.textContent = "Remove"
    rmButton.classList.add('remove')
    li.appendChild(rmButton)

    //up
    let upButton = document.createElement('button')
    upButton.textContent = "Up"
    upButton.classList.add('up')
    li.appendChild(upButton)

    //down
     let dnButton = document.createElement('button')
    dnButton.textContent = "Down"
    dnButton.classList.add('down')
    li.appendChild(dnButton)
}

//step 3 
//adding functionality to up down and remove buttons