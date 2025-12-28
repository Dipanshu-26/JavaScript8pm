//conditional statements
//if else   
//switch  case 

//one input -- multiple outputs

let city = "jaipur"

switch(city){
  case "pune":
    console.log("MH")
  case "jaipur":
    console.log("RJ")
  case "delhi":
    console.log("delhi")
  case "banglore":
    console.log("KA")
}

//swich-case without break stmt executes all cases after matching case
console.log("------------------------")
city = "pune"

switch(city){
  case "pune":
    console.log("MH")
    break
  case "jaipur":
    console.log("RJ")
    break
  case "delhi":
    console.log("delhi")
    braek
  case "banglore":
    console.log("KA")
    break
  default:
    console.log("incorrect city name....")
}

console.log("------------------------")
city = "Pune"

switch(city){
  case "pune":
  case "Pune":  
    console.log("MH")
    break
  case "jaipur":
  case "Jaipur":  
    console.log("RJ")
    break
  case "delhi":
  case "Delhi":
    console.log("delhi")
    braek
  case "banglore":
  case "Banglore":
    console.log("KA")
    break
  default:
    console.log("incorrect city name....")
}


console.log("----------------------------")
city = "pune"

// switch(city){   
//   case (city == "pune" || city == "Pune"):
//     console.log("MH")
//     break
//   case (city == "jaipur" || city ==  "Jaipur"):  
//     console.log("RJ")
//     break
//   case (city == "delhi" || city == "Delhi"):
//     console.log("delhi")
//     braek
//   case (city == "banglore" || city == "Banglore"):
//     console.log("KA")
//     break
//   default:
//     console.log("incorrect city name....")
// }   //above code gives incorrect output


console.log("----------------------------")
city = "delhi"
isFlag =true

switch(isFlag){
  case (city == "pune" || city == "Pune"):   //true  //false 
    console.log("MH")
    break
  case (city == "jaipur" || city ==  "Jaipur"):  //false
    console.log("RJ")
    break
  case (city == "delhi" || city == "Delhi"):
    console.log("delhi")
    break
  case (city == "banglore" || city == "Banglore"):
    console.log("KA")
    break
  default:
    console.log("incorrect city name....")
}

// switch(word){
//   case word
//     execute this
//   case op:
//     execute this
// }

console.log("----------------------------------")
// find greater number among 3 
let a=100
let b=20
let c=30

if(a>b && a>c){
  console.log("a is greater")
}
else if(b>a && b> c){
  console.log("b is greater")
}
else {
  console.log("c is greater")
}

console.log("--------------------")

a=100
b=200
c=300

isFlag=true

switch(isFlag){
  case (a>b && a>c):
    console.log("a is greater")
    break
  case (b>a && b> c):
    console.log("b is greater")
    break
  default:
    console.log("c is greater")
}