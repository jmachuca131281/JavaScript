// Variables
const LISTA_TWEETS = document.getElementById("lista-tweets");

onEventListeners(); // Event listeners and functions

function onEventListeners() { // Cuando se envia el formulario
  document.querySelector('#formulario') .addEventListener('submit', agregarTweet);
  LISTA_TWEETS.addEventListener('click', borrarTweet); // Borrar tweet
  document.addEventListener('DOMContentLoaded', localStorageListo); // Contenido cargado
};

function agregarTweet(e) { // Añadir tweet del formulario
  e.preventDefault();
  const TWEET_TEXT_AREA = document.getElementById('tweet').value; // Leer el valor del textArea
  const BOTON_BORRAR_LINK = document.createElement('a'); // Crear boton de eliminar
  const LIST_ITEM = document.createElement('li'); // Crear elemento y añadirle el contenido a la lista
  BOTON_BORRAR_LINK.classList = 'borrar-tweet';
  BOTON_BORRAR_LINK.innerText = 'X';
  LIST_ITEM.innerText = TWEET_TEXT_AREA;
  LIST_ITEM.appendChild(BOTON_BORRAR_LINK); // Añade el boton de borrar al tweet
  LISTA_TWEETS.appendChild(LIST_ITEM); // Añade el tweet a la lista
  agregarTweetLocalStorage(TWEET_TEXT_AREA); // Añadir a Local Storage
};

function borrarTweet(e) {
  e.preventDefault();
  if (e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
};

function localStorageListo() {
  let tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function(tweet) {
    const BOTON_BORRAR_LINK = document.createElement('a'); // Crear boton de eliminar
    const LIST_ITEM = document.createElement('li'); // Crear elemento y añadirle el contenido a la lista
    BOTON_BORRAR_LINK.classList = 'borrar-tweet';
    BOTON_BORRAR_LINK.innerText = 'X';
    LIST_ITEM.innerText = tweet;
    LIST_ITEM.appendChild(BOTON_BORRAR_LINK); // Añade el boton de borrar al tweet
    LISTA_TWEETS.appendChild(LIST_ITEM); // Añade el tweet a la lista
  });
};

function agregarTweetLocalStorage(tweet) { // Agregar tweet a local storage
  let tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet); // Añadir el nuevo tweet
  localStorage.setItem('tweets', JSON.stringify(tweets)); // Convertir de string a arreglo para local storage
};

function obtenerTweetsLocalStorage() { // Comprobar que haya elementos en LocalStorage, retorna un arreglo
  let tweets; // Revisamos los valores de local storage
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
};

function borrarTweetLocalStorage(tweet) {
  let tweets, tweetBorrar;
  tweetBorrar = tweet.substring(0, tweet.length -1);
  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function(tweet, index) {
    if(tweetBorrar === tweet) {
      tweets.splice(index, 1);
    }
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
};
