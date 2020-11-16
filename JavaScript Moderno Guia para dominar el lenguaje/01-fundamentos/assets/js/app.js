alert('Hola desde app.js');

console.log('Hola mundo desde VSCode');

let a = 34;
var b = 33;
let d = 'Mundo'

a = 43; 
b = 87;  

let c = a + b;

// Hay varias formas de utilizar el console
console.log(c);
console.error('This is a error ' + c);
console.warn('This is a warning ' + c);
console.log('log', c);
console.error('This is a error ', + c);
console.warn('This is a warning ', + c);

// En el buscador cuando es un strign se pinta en blanco y cuando es una variable de color morado


// Imprimier la varible con su valor con {}

console.log({ c } );
console.error({c});
console.warn({c});

// Agregar estilos en la consola

console.log('%c Mis Variables', 'color:blue; font-weight: bold; font-size: 15;');
console.log(c);

// Definir string

let x = 'Hola';
console.log(x);


// Para mostrar en pantalla una tabla
// Se usa [] para agregar arreglos y {} para agregar objetos
console.table({a, b, c, x});


// Crear constantes

const saludo = a + d;


// Depuración y breakPoints

c = 'Hola de nuevo';

// Orden y lugar de las importaciones

