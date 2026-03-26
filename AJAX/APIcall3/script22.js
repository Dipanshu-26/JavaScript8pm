//promise combinators
// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()

//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

async function loadDashboard() {
    try {
        const [page1, page2, page3] = await Promise.all([
            fetch('https://reqres.in/api/users?page=1', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }).then(res => res.json()),
            

            fetch('https://reqres.in/api/users?page=2', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }).then(res => res.json()),

            fetch('https://reqres.in/api/users?page=3', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }).then(res => res.json())
        ])

        console.log(page1.data,page2.data, page3.data)
        //console.log(page3.data)
   } catch (error){
        console.log('Dashboard failed to load', error )
   }
}
//loadDashboard()

//promise.any()
//it will exectue till it get first resolve

async function loadDashboard2() {
  try{
    let response = await Promise.any([
        fetch('https://wrong-url.com/api', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }),
            
            fetch('https://wrong-url.com/api', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }),

            fetch('https://reqres.in/api/users?page=1', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            })
    ])
   const data = await response.json()
   console.log(data.data)
  } catch(error){
    console.log(`error == ${error}`)
  }

}
//loadDashboard2()

//.race .allsettle
//promise.race()
//it will race betweenthe promises and returns first executed promise

async function loadFastestUser() {
    const response = await Promise.race([
         fetch('https://reqres.in/api/users?page=1', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }),
            

            fetch('https://reqres.in/api/users?page=2', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }),

            fetch('https://reqres.in/api/users?page=3', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            })
    ])
    const apiData = await response.json()
    console.log(apiData.data)
    
}
//loadFastestUser()

//promise.allsettled()
//it will execute all and return whatever is result in array..
//if resolve return output ..if reject return reason

async function loadwebpage() {
    const response = await Promise.allSettled([
         fetch('https://reqres.in/api/users?page=1', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }).then(res => res.json()),
            

            fetch('https://reqres.in/api/users?page=2', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }).then(res => res.json()),

            fetch('https://wrong-url', {
                method: 'GET',
                headers: {
                    "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
                }
            }).then(res => res.json())
    ])
    console.log(response)
    
}
loadwebpage()