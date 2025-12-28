//loops inJS
//for and while

//for --- defined number of time
//while --- until certin condition satisfied

//     counter
//for(inilization ; condition ; increment /decrement){
//             statements to execute
// }

//print hello 5 time
for(let i=0;i<5;i++){            //i=0, 1,2,3,4,5
    console.log("hello")
}

//print 1 to 10
for(let i=1; i<=10;i++){
    console.log(i)
}

//print table of 2
for(let x=2; x<=20;x+=2){   //x+=2 ===> x=x+2
    console.log(x)
}


for(let i=1 ; i<=10;i++){
    console.log(i*2)
}

//print 10 to 1
for(let i=10;i>=1;i--){
    console.log(i)
}


//print table of 5 backwords
for(i=50;i>=5;i-=5){     // i-=5 ==> i=i-5
    console.log(i)
}


//break statement   and continue statement


//break exit from loop on given condition

console.log("--------------------------")
//let i=0
for(let i=0;i<=10;i++){
    if(i==3){       //i=0, 1,2,3 break
        break
    }
    console.log(i)  //0,1,2
}

console.log("--------------------------")
//let i=0
for(let i=0;i<=10;i++){
    console.log(i)  //0,1,2,3
    if(i==3){       //i=0, 1,2,3 break
        break
    }
  
}

//continue will skip on certion condition
console.log("--------------------------")
for(let i=0;i<=10;i++){    //i=0,1,2,3,4
    if(i==3){
        continue  
    }
    console.log(i)  //i=0,1,2,4......
}


console.log("--------------------------")
for(let i=0;i<=10;i++){    //i=0,1,2,3,4
    console.log(i)  //i=0,1,2,3,4......
    if(i==3){
        continue  //go to next counter
    }
    console.log("hello")
}    
    