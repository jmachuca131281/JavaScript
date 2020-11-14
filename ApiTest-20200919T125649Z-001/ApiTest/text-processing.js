const xhr = new XMLHttpRequest();

// listen for `load` event
xhr.onload = () => {
    // print JSON response
    if (xhr.status >= 200 && xhr.status < 300) {
        // parse JSON
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};

// create a JSON object
const json = {
    "username": "jason12",
    "password": "1234"
};

// open request
xhr.open('POST', 'http://localhost:4000/users/authenticate');

// set `Content-Type` header
xhr.setRequestHeader('Content-Type', 'application/json');

// send rquest with JSON payload
xhr.send(JSON.stringify(json));





































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