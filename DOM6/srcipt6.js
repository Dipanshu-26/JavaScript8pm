//   <h1 id="one" class="cone" name="nm" >Student List</h1>
//     <ul>
//         <li>Dipanshu</li>
//         <li>Nitin</li>
//         <li>Tanish</li>
//         <li>Neel</li>
//     </ul>
//     <input type="text">
//     <button id ="btn1">Add Me</button>

let btn = document.querySelector('#btn1')
let txt = document.querySelector("input")
let ullist = document.querySelector('ul')

btn.addEventListener('click',function(){
    let newtxt = txt.value
    let newli = document.createElement('li')       //<li> </li>
    newli.textContent = newtxt
    ullist.appendChild(newli)
    //ullist.prepend(newli)
    txt.value=""
    

})