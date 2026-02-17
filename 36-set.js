//java script datatypes
// let
// const
// boolean 
// strings 
// arrays 
// objects
// Map
// set

//set unique value store 
let arr = [11,22,33,11,22,33]


//define
let st = new Set()

console.log(st)
console.log(typeof(st))

//add in set 

st.add(1)
st.add(2)
st.add("dip")
st.add(true)

console.log(st)
console.log(st.size)

st.add("dip")
st.add("nit")
console.log(st)
console.log(st.size)

// st.add([11,22,33])   // reference =100
// st.add({a:1,b:"rucha"})   // reference =200
// console.log(st)


//retrive
//console.log(st[0]) // not possible in set

//has

console.log(st.has(1))  //true
console.log(st.has(5))   //false
console.log(st.has("dip"))
console.log(st.has(true))

console.log(st.has([11,22,33])) //false array and object stores values with reference
console.log(st.has({a:1,b:"rucha"}))  //false

let a=[11,22,33]     // reference =300
let b={a:1,b:"rucha"}  // reference =400

st.add(a)
st.add(b)

console.log(st)
console.log(st.has(a))
console.log(st.has(b))

//update and delete

st.delete("dip")
console.log(st)

st.add("adi")
console.log(st)


st.clear()
console.log(st)


//looping

let mySet = new Set(["dip","rucha","adi","tanish"])

for(let el of mySet){
    console.log(el)
}

mySet.forEach(function(el){
    console.log(el)
})


for(let k of mySet.keys()){
    console.log(k)
}

for(let et of mySet.entries()){
    console.log(et)
}

for(let [a, b,c] of mySet){
    console.log(a,b,c)
}

