//find age if birth year is given

byr = [2008,1983,2017,1992]
let age=[]

for(let i=0;i<byr.length;i++){
    age.push(2026-byr[i])                      //i=2008   1983     2017     1998
}
console.log(age)

//---------------------------------------------

//find marks above 40
let marks =[20,90,34,55,78,98,12,30,45,88]
let above40 = []

for(let i=0;i<marks.length;i++){    //marks[i]=  20,90,34,55,78,98,12,30,45,88
    if(marks[i]>40){                //90   55    78   98   45  88
        above40.push(marks[i])
    }
}
console.log(above40)

//find below 40 marks
let below40 = []

for(let i=0;i<marks.length;i++){    //marks[i]=  20,90,34,55,78,98,12,30,45,88
    if(marks[i]<40){                //20,34,12,30
        below40.push(marks[i])
    }
}
console.log(below40)

//---------------------------------------------------

// find addition of all marks
marks =[20,90,34,55,78,98,12,30,45,88]
total=0

for(let i=0;i<marks.length;i++){
    total = total + marks[i]     // 0+20,  20+90,  110+34 .....
    //console.log(total)
}

console.log(total)

//-------------------------------------------

//Welcome cityname !!!!

let city = ['jaipur','pune','goa','banglore','mumbai']

for(let i=0;i<city.length;i++){
    console.log(`Welcome, ${city[i]} !!!!`)              //`abd ${variable} abc`
}

//-------------------------------------------
//find even and odd prime
//find vovel 
