//promise combinators
// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()

//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

// async function loadDashboard() {
//     //try {
//         const [page1, page2, page3] = await Promise.all([
//             fetch('https://reqres.in/api/users?page=1', {
//                 method: 'GET',
//                 Headers: {
//                     "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
//                 }
//             }).then(res => res.json()),
            

//             fetch('https://reqres.in/api/users?page=2', {
//                 method: 'GET',
//                 headers: {
//                     "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
//                 }
//             }).then(res => res.json()),

//             fetch('https://reqres.in/api/users?page=1', {
//                 method: 'GET',
//                 headers: {
//                     "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
//                 }
//             }).then(res => res.json())
//         ])

//         console.log(page1.data)
//   //  } catch (error){
//         //console.log('Dashboard failed to load', error )
//    // }
// }

async function loadDashboard() {
  try {
    const [users, page1, page2] = await Promise.all([
      fetch('https://reqres.in/api/users?page=1', {
        method: 'GET',
        headers: {
          "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
        }
      }).then(r => r.json()),
      fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
        headers: {
          "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
        }
      }).then(r => r.json()),
      fetch('https://reqres.in/api/users?page=3', {                //no data [] on page 3
        method: 'GET',
        headers: {
          "x-api-key": "reqres_7719223fd6664035a09558d2a98b01d7"
        }
      }).then(r => r.json())
    ])
    //console.log(`user data = ${users.data}, page1 data = ${page1.data}, page 2 data = ${page2.data}`)
    console.log(users.data, page1.data, page2.data)
  } catch (error) {
    console.error('Dashboard failed to load', error)
  }
}

//function call
loadDashboard()











//promise.any()
//it will exectue till it get first resolve

//promise.allsettled()
//it will execute all and return whatever is result in array..
//if resolve return output ..if reject return reason

//promise.race()
//it will race betweenthe promises and returns first executed promise