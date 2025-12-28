//while loop

//for
//for(initialization;condn;increment/dec){
// stmts 
// }

//inilization
//while(condition){
//     statements
//     increment/decrement
// }

//print 1 to 10
let i=1
while(i<=10){
    console.log(i)
    i+=1
}

console.log("---------------------------")
//print hello 5 times
i=1
while(i<=5){
    console.log("hello")
    i+=1
}

console.log("---------------------------")
i=10
while(i>=1){
    console.log(i)
    i-=1
}

console.log("---------------------------")
//print table of 2
i=2
while(i<=20){
    console.log(i)
    i+=2
}

console.log("---------------------------")
//print table 3
i=1
while(i<=10){
    console.log(i*3)
    i+=1
}

console.log("---------------------------")
//print table 3 in reverse
i=30
while(i>=3){
    console.log(i)   //30   27   24   21-----
    i-=3
}

console.log("---------------------------")
//break stmt in while
i=1
while(i<=10){     //i= 1  2  3
    if(i==3){
        break
    }
    console.log(i)    //1  2
    i+=1              //2  3
}


console.log("---------------------------")
//break stmt in while
i=1
while(i<=10){     //i= 1  2  3
    console.log(i)    //1  2   3
    if(i==3){
        break
    }
   
    i+=1              //2  3
}

console.log("---------------------------")

i=1
while(i<=10){
    if(i==3){
        i+=1    //if not written goes in infinite loop
        continue  //skips condition 
    }
    console.log(i)
    i+=1
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
