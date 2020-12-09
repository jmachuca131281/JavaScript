// Eliminar de Local Storage
localStorage.clear();

// Primeros pasos cone l DOM y scripting
// let elemento;
// elemento = document;
// elemento = document.all;
// elemento = document.all[10];
// elemento = document.head;
// elemento = document.body;
// elemento = document.forms;
// elemento = document.forms[0].method;
// elemento = document.forms[0].className;
// elemento = document.forms[0].classList;
// elemento = document.images;
// elemento = document.scripts;

// let imagenes = document.images;
// let imagensArr = Array.from(imagenes);

// imagensArr.forEach(function(imagen){
//   console.log(imagen);
// });

// console.log(elemento);
// Seleccionando elemenentos y aplicandole propiedades.

// let elemento;
// elemento = document.getElementById('hero');

// console.log(elemento);

// let verEncabezado = document.getElementById('encabezado');
// verEncabezado = document.getElementById('encabezado').id;

// verEncabezado = document.getElementById('encabezado').className;
// verEncabezado = document.getElementById('encabezado').textContent;
// verEncabezado = document.getElementById('encabezado').innerText;

// console.log(verEncabezado);

// let changeStyle = document.getElementById('encabezado');
// changeStyle.style.background = '#333';
// changeStyle.style.color = "#fff";
// changeStyle.style.padding = '20px';

// // Cambiando el texto
// changeStyle.textContent = 'Texto cambiado por mi';
// changeStyle.innerText = 'Texto cambiado por mi';

// console.log(changeStyle);


// Query Selector, puede seleccionar por clase como por id intercambiando el gato por el punto.

// const encabezado = document.querySelector('#encabezado');
// encabezado.style.background = '#333';
// encabezado.style.color = "#fff";
// encabezado.style.padding = '10px';
// encabezado.innerText = 'Sorry lord for my comportament'

// console.log(encabezado);


// Seleccionando múltiples elementos

// const enlaces1 = document.querySelector('#principal').getElementsByClassName('enlace');

// enlaces.forEach(function(enlace) {
//   console.log(enlace.textContent);
// });

// console.log(enlaces);

// Seleccionando múltiples elementos en JS part. 2

// const enlaces = document.querySelectorAll('#principal .enlace');
// enlaces[1].style.background = 'red'
// enlaces[1].textContent = 'Nuevo Enlace Editaso'

// console.log(enlaces);

// const navegacion = document.querySelector('#principal');

// console.log(navegacion.childNodes);
// console.log(navegacion.children[0].noteTypes);


// 1 = Elementos
// 2 = Atributos
// 3 = TextNode
// 8 = Comentarios
// 9 = Documentos
// 10 = docType


//Create enlace
//const enlace = document.createElement('a');
////Agregar una clase
//enlace.className = 'enlace';
//// anadir id
//enlace.id = 'nuevo-id';
////Atributo href
//enlace.setAttribute('href', 'www.youporn.com');
//// Añadir un texto
//enlace.appendChild(document.createTextNode('Solo para adultos'));
//// Agregar al HTML
//document.querySelector('#secundaria').appendChild(enlace);

//console.log(enlace);


// Event Listener en JavaScript
// Primero se selecciones el id a buscar y luego se le agrega el Event Listener
// Primera forma.
// document.querySelector('#submit-buscador').addEventListener('click', function(e){
//   e.preventDefault();
//   alert('Buscando cursos');
// });


// Segunda forma
// En la segunda forma se crea una una faunción aparte para controlar las acciones de los eventos
// document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

// function ejecutarBoton(e){
//   e.preventDefault();
//   let elemento;
//   elemento = e;
//   elemento = e.target;
//   elemento = e.target.id;
//   elemento = e.target.className;
//   elemento = e.target.innerText;
//   console.log(elemento);
// }


// Es posible agregar eventos en cualquier lugar del DOM
// document.querySelector('#encabezado').addEventListener('click', function(e){
//   e.target.innerText = 'Nuevo encezado';
// });

// Eventos del mause
const encabezado = document.querySelector('#encabezado');
const enlace = document.querySelector('.enlace');
const boton  = document.querySelector('#vaciar-carrito');
let number = 12;

//Click
boton.addEventListener('click', obtenerEvento);
//Doble click
boton.addEventListener('dblclick', obtenerEvento);
//Mouse enter
boton.addEventListener('mouseenter', obtenerEvento);
//Mosuse leave
boton.addEventListener('mouseleave', obtenerEvento);
//Mosuse over
boton.addEventListener('mouseover', obtenerEvento);
//Mouse out
boton.addEventListener('mouseout', obtenerEvento);
//Mosuse Down
boton.addEventListener('mousedown', obtenerEvento);
//Mosue up
boton.addEventListener('mouseup', obtenerEvento);

encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e){
  console.log(`Evento: ${e.type}`);
}







