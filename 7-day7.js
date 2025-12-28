//truthy , falsy values

//falsy == 0,undefined,null,NaN,""

//truthy == any values other than falsy like 3>2, true, 4==4 

// 0 = falsy

if(0){
  console.log("hello")
}
else{
  console.log("bye")
}

console.log("---------------")

//undefined

if(undefined){
  console.log("hello")
}
else{
  console.log("bye")
}

console.log("---------------")
let x= undefined

if(x==undefined){
  console.log("hello")
}
else{
  console.log("bye")
}

console.log("---------------")
if(NaN){
  console.log("hello")
}
else{
  console.log("bye")
}


console.log("---------------")

x=NaN
if(x==NaN){
  console.log("hello")
}
else{
  console.log("bye")
}
//NaN is not equal to anythin - not even NaN also

console.log("---------------")
x=NaN
if(isNaN(x)){
  console.log("hello")
}
else
{
  console.log("bye")
}

//""
console.log("---------------")
x=""
if(""){
    console.log("hello")
}
else
{
  console.log("bye")
}


console.log("---------------")
x="dip"
if(x){
    console.log("hello")
}
else
{
  console.log("bye")
}

console.log("---------------")
//truthy values example

if(3>2){
  console.log("hello")
}
else{
  console.log("bye")
}


console.log("---------------")
if(true){
  console.log("hello")
}
else{
  console.log("bye")
}


console.log("---------------")
if(false){
  console.log("hello")
}
else{
  console.log("bye")
}

console.log("---------------")
if("dip@123"){
  console.log("hello")
}
else{
  console.log("bye")
}

//10>9, 1==1, [], {}, " ","dip@123"