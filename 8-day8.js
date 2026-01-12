let a=10
console.log(a)
console.log(typeof(a))

a=10.3
console.log(a)
console.log(typeof(a))

a='dipanshu'
console.log(a)
console.log(typeof(a))

a='dipanshu@123'
console.log(a)
console.log(typeof(a))

a=[11,22,33,44]
console.log(a)
console.log(typeof(a))
console.log("-------------------------------")
//funcctions
//without parameter without return type
function calc1(){
    console.log(10+20)
    console.log(10*20)
    console.log(10/20)
    console.log(10-20)
    console.log(10%20)
}
//calc1()   //function call

console.log("-------------------------------")
//with parameter without return type
function calc2(a,b){
    console.log(a+b)
    console.log(a*b)
    console.log(a/b)
    console.log(a-b)
    console.log(a%b)
}
calc1()
calc2(100,17)
console.log("-------------------------------")
//with parameter with return type
//"hello ... Dipanshu!!!"

function avg(a,b,c){
    avg = (a+b+c)/3
    return avg
    console.log("dipanshu")
}

let average = avg(10,20,30)
console.log(average)
console.log("-------------------------------")
// loops 
//for, while 

//print 1 to 10
//  inilization; condition;inc/dec
for(let i=1;i<=10;i++){
    console.log(i)
}
console.log("-------------------------------")
//table of 2

for(let i=2;i<=20;i+=2){   //i=i+2
    console.log(i)
}

for(let i=1;i<=10;i++){   //i=i+2
    console.log(i*2)
}
console.log("-------------------------------")
for(let i=1;i<=10;i++){   //i=i+2
    console.log(i*3)
}

//while

//inilization
// while(condition)
// inc/dec

let i=1

while(i<=10){
    console.log(i)
    i++
}

//print table of 3 in backword

for(let i=30;i>=3;i=i-3){     //i= 30,27,24......6, 3, 0
    console.log(i)
}

console.log("-----")
i=30
while(i>=3){
    console.log(i)
    i=i-3                 //i++,i--,i+=2,i-=2 
}


console.log("---------------------------")
let j=1
let flag=true
while(flag){      //while(true)     j= 1   2   3  4  5  6  7   flag = false
    if(j==7){
        flag=false     
    }
    console.log(j)   // j= 1  2  3  4  5   6  7
    j+=1              //2  3  4  5  6  7  8
}
//break and continue


//break - exit from loop 
//continue - skip 
console.log("---------------------------")
for(let i=1;i<=10;i++){
    if(i==5){
        break
    }
    console.log(i)
}


console.log("---------------------------")
for(let i=1;i<=10;i++){
    if(i==5){
        continue

    }
    console.log(i)
}
console.log("---------------------------")
i=1
while(i<=10){
    //console.log(i)
    if(i==5){
        break
    }
    console.log(i)
    i++
}

console.log("---------------------------")
i=1
while(i<=10){             //i=1,2,3,4 ,5
    //console.log(i)
    if(i==5){
        i++                   //i=6
        continue
        
        
    }
    console.log(i)
    i++
}
