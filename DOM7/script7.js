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


//1. add eventlistner on ul tag
//2. find event target if it is button
//3. find if it is remove up or down 
//4. find target's parent element i.e. li
//5. find again parent element i.e ul
//6.  find if previous child is present in case of up and 
// next child is present in case of down 
// swap chaild by using insertBefore method 


ulList.addEventListener('click',function(event){
    //console.log("rmbtn")
    if(event.target.tagName == 'BUTTON' ){
        //console.log("rmbtn2")
        if(event.target.className == "remove"){
            //console.log("rmbtn3")
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if(event.target.className == "up"){
            //console.log("rmbtn3")
            let li = event.target.parentElement
            let ul = li.parentElement
            let preli =li.previousElementSibling
            if(preli){
                ul.insertBefore(li,preli)
            }
        }

         else if(event.target.className == "down"){
            //console.log("rmbtn3")
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextli =li.nextElementSibling
            if(nextli){
                ul.insertBefore(nextli,li)
            
            }
        }
    }
})