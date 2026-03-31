//<h1 id="one" class="cone" name="nm" >Black</h1>
//    <input type="text">
//    <button id ="btn1">Change</button>


let headOne = document.querySelector('#one')
let txt = document.querySelector('input')
let btn = document.querySelector('#btn1')

btn.addEventListener('click',function(){

    headOne.textContent = txt.value
    headOne.style.color = txt.value
    console.log(txt.value)
    txt.value = ""                    //clear input
})