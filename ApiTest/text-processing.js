const formulario = document.querySelector('#form');

formulario.addEventListener('submit', (e)=> {
  e.preventDefault();

  var u = document.getElementById("u").value;
  var p = document.getElementById("p").value;

  // console.log(u);
  // console.log(p);

  const login = {
    username: u,
    password: p
  }
  
  fetch('http://localhost:4000/users/authenticate', {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(response){
    if (response.status !==200) {
        console.log("Looks like there was a problem. Status code: " + response.status);
        return; 
      }
      response.json().then(function(data){
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error : -S', err);
    });
});



// const button = document.getElementById("button")

// button.addEventListener('click', () =>{
//   var u = document.getElementById("u").value;
//   var p = document.getElementById("p").value;
//   console.log(u);
//   console.log(p);

//   const login = {
//     username: 'Frito',
//     password: '1234'
//   }
  
//   fetch('http://localhost:4000/users/authenticate', {
//     method: 'POST',
//     body: JSON.stringify(login),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(function(response){
//     if (response.status !==200) {
//         console.log("Looks like there was a problem. Status code: " + response.status);
//         return; 
//       }
//       response.json().then(function(data){
//         console.log(data);
//       });
//     })
//     .catch(function(err) {
//       console.log('Fetch Error : -S', err);
//     });
// }) 




// const button = document.getElementById("button")

// button.addEventListener('click', () =>{
//   var user = document.getElementById("u").value;
//   var pssword = document.getElementById("p").value;

//   console.log(user);
//   console.log(pssword);
  
//   const login = {
//     "username": "Frito",
//     "password": "1234"
//   };

//   fetch('http://localhost:4000/users/authenticate', {
//     method: 'POST',
//     body: JSON.stringify(login),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
//     .then(res => console.log(res))
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('No se logio'))
  

//   // const registro = {
//   //   firstName: "Fito",
//   //   lastName: "Paez",
//   //   username: "Frito",
//   //   password: "1234"
//   // }
  
//   // fetch('http://localhost:4000/users/register', {
//   //   method: 'POST',
//   //   body: JSON.stringify(registro),
//   //   headers: {
//   //     "Content-Type": "application/json"
//   //   }
//   // })
//   // .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
//   // .then(res => console.log(res))
// }) 




// const url = 'https://localhost:4000/users/authenticate'

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))

// fetch('https://localhost:4000/users/authenticate', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         username: 'jason12',
//         password: '1234'
//     })
// }).then(res => {
//     return res.json()
// }).then(data => console.log(data))
// .catch(error => console.log('ERROR'))



// const login = {
//     "username": "jason12",
//     "password": "1234"
// };

// async function postData(url = '', data= {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(login)
//     });
//     return response.json();
// }

// postData('https://localhost:4000/users/authenticate', {answer: 42 })
//     .then(login => {
//         console.log(login);
//     })


// let reqHeader = new Headers();
// reqHeader.append('Content-Type', 'application/json');

// let initObject = {
//     method: 'POST', 
//     header: reqHeader,
//     body: JSON.stringify(login),
// };

// fetch('https://localhost:4000/users/authenticate', initObject)
// .then(function (response) {
//     return response.json();
// })
// .then(function (login) {
//     console.log('Success:', login);
// })
// .catch(function (err) {
//     console.log("Something went wrong", err);
// });

// const xhrLogin = new XMLHttpRequest();
// const xhrRegistro = new XMLHttpRequest();
// const xhrUpdate = new XMLHttpRequest();
// const xhrDelete = new XMLHttpRequest();

// Login

// listen for `load` event
// xhrLogin.onload = () => {
//     // print JSON response
//     if (xhrLogin.status >= 200 && xhrLogin.status < 300) {
//         // parse JSON
//         const response = JSON.parse(xhrLogin.responseText);
//         console.log(response);
//     }
// };

// // create a JSON object para el login
// const login = {
//     "username": "jason12",
//     "password": "1234"
// };

// // open request
// xhrLogin.open('POST', 'http://localhost:4000/users/authenticate');

// // set `Content-Type` header
// xhrLogin.setRequestHeader('Content-Type', 'application/json');

// // send rquest with JSON payload
// xhrLogin.send(JSON.stringify(login));


// // Registro


// // listen for `load` event
// xhrRegistro.onload = () => {

//     // print JSON response
//     if (xhrRegistro.status >= 200 && xhr.status < 300) {
//         // parse JSON
//         const response = JSON.parse(xhrRegistro.responseText);
//         console.log(response);
//     }

// };

// // create a JSON object para el registro
// const registro = {
//     "firstName": "Josman1",
//     "lastName": "Abreo1",
//     "username": "josman1",
//     "password": "1234"
// };

// // open request
// xhrRegistro.open('POST', 'http://localhost:4000/users/register');

// // set `Content-Type` header
// xhrRegistro.setRequestHeader('Content-Type', 'application/json');

// // send rquest with JSON payload
// xhrRegistro.send(JSON.stringify(registro));


// Update

// xhrUpdate.onload = () => {
//     if(xhrUpdate >= 200 && xhrUpdate.status < 300) {
//         const response = JSON.parse(xhrUpdate.responseText);
//         console.log(response);
//     }
// }

// const updates = {
//     "firstName": "josemanuel son of God",
//     "lastName": "Machucaabreo"
// };

// xhrUpdate.open('PUT', 'http://localhost:4000/users/5f5d3254ea81ec29ccd31218');
// xhrUpdate.setRequestHeader('Content-Type', 'application/json');
// xhrUpdate.setRequestHeader(
//     'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjVjZjMyYzViZDQyYzMyNDA3YWU0MWQiLCJpYXQiOjE2MDA2NDk1NDYsImV4cCI6MTYwMTI1NDM0Nn0.nG1h4e_9D-9lF2Bquye_2kW-HPoTUfNoX19GQ72T8J4'
// );

// xhrUpdate.send(JSON.stringify(updates));




// Delete

// xhrDelete.onload = () => {
//     if(xhrDelete >= 200 && xhrDelete.status < 300) {
//         const response = JSON.parse(xhrDelete.responseText);
//         console.log(response);
//     }
// }

// xhrDelete.open('DELETE', 'http://localhost:4000/users/5f6647d4be7fc517544062b0');

// xhrDelete.setRequestHeader(
//     'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjVjZjMyYzViZDQyYzMyNDA3YWU0MWQiLCJpYXQiOjE2MDA2NTA3OTIsImV4cCI6MTYwMTI1NTU5Mn0.yxsvMer4QE7GeGV_Bj0PjW7e0eUsmOF1J5fimdR15Ys'
// )

// xhrDelete.send();



















// create a JSON object
// const json = {
//     userName: 'jason12',
//     password: '1234'
// };

// // request options
// const options = {
//     method: 'POST',
//     body: JSON.stringify(json),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

// // send post request
// fetch('/authenticate', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));










// var token_ // variable will store the token
// var userName = "jason12"; // app clientID
// var passWord = "1234"; // app clientSecret
// var url = "http://localhost:4000/users/authenticate"; // Your application token endpoint  
// var request = new XMLHttpRequest();


// function getToken(url, clientID, clientSecret) {
//     var key;
//     request.open("POST", url, true);
//     request.setRequestHeader("Countent-type", "application/json");
//     request.send();
//     console.log(request);
    
//     request.onreadystatechange = function () {

//         if (request.readyState == request.DONE) {

//             var response = request.responseText;
//             var obj = JSON.parse(response);
//             key = obj.access_token; //store the value of the accesstoken
//             token_ = key; // store token in your global variable "token_" or you could simply return the value of the access token from the function

//         }
//     }
// }

// // Get the token
// getToken(url, userName, passWord);



// var obj = JSON.stringify(API_URL);
// document.body.innerHTML = obj;




// RapidAPI request headers
// const REQUEST_HEADERS = {
//     'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
//     , 'X-RapidAPI-Key': '768d224b32mshbe5f76705cbfd9bp154850jsnba7a2201e140'
//     , 'Content-Type': 'application/x-www-form-urlencoded'
// };


//     // Getting a textarea element with a comment
//     const commentElement = document.getElementById('comment');
//     // Getting comment text
//     const commentText = commentElement.value.trim();

//     // Handle empty comment
//     if (!commentText) {
//         return handleEmptyComment();
//     }
//     // Calling the API and passing the result with the displayResult as a callback function
//     return analyzeComment(commentText, displayResult);
// };

// const analyzeComment = (comment, callback) => {
//     // Creating an object to send to the server
//     const data = {
//         text: comment
//         , language: 'english'
//     };
//     // Encoding data for application/x-www-form-urlencoded content type
//     const formattedData = Qs.stringify(data);
//     // POST request to server
//     axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
//         .then(response => {
//             const data = response.data;
//             // Calling a callback function with data from the server
//             callback(data)
//         })
//         .catch(error => console.error(error))
// };

// const handleEmptyComment = () => {
//     const resultBlockElement = document.getElementById('main-result-block');
//     resultBlockElement.classList.add('invisible');
//     return alert('Your comment is empty =(');
// };

// const displayResult = result => {
//     // Remove invisible class for main-result-block
//     const resultBlockElement = document.getElementById('main-result-block');
//     resultBlockElement.classList.remove('invisible');

//     // Setting the color of the result text depending on the response label
//     const label = result.label;
//     const resultElement = document.getElementById('result');
//     resultElement.setAttribute('class', label);
//     let resultText = '';

//     // Choosing the result text depending on response label
//     switch (label) {
//         case 'pos':
//             resultText = 'Wow! Your comment is very positive!';
//             break;
//         case 'neg':
//             resultText = 'Negative comment =(';
//             break;
//         case 'neutral':
//             resultText = 'Simple comment =)';
//             break;
//         default:
//             resultText = 'Hmmm, cant understand your comment';
//     }

//     // Setting the result text
//     resultElement.textContent = resultText;
// };