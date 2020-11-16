// Diferencia entre una función y un método, es que el método se define en un objeto.

function saludar (){
    console.log('Hola Mundo');
}

const saludar2 = function(){
    console.log('Hola mundo desde saludar 2');
}

function saludar3 (nombre){
    console.log('Hola', + nombre);
}

const saludar4 = function(nombre){
    console.log('Hola mundo desde saludar 4', + nombre );
}

function saludar5(nombre){
    console.log(arguments);
    console.log('Hola' + nombre);   
}


saludar(); 
saludar2(); 
saludar3('JoseMelegindo'); 
saludar4('JoseMelegindo'); 
saludar5('JoseMelegindo', 40, true, 'Locombia'); 



// Lamda Function

const saludarFlecah = (nombre) => {
    console.log('Hola flecha');
}

const saludarFlecah1 = (nombre) => {
    console.log('Hola flecha' + nombre);
}

saludarFlecah('Josman');
saludarFlecah1('Josman1');
