// Todas estas funciones pertenecen a windows y se peude verificar en la consola
// Si se agrega a la consola la palabra clave windows mostrara todos los métodos.


// No se ejecuta ningun código hasta que el usuario preciones el botón.

alert( 'Hola alert' );

// Para mostrar el promt
let nombre = prompt( '¿Cuál es su nombre?', 'Sin nombre');
console.log(nombre);

// Para mostrar la confirmación en pantalla, respuesta true o false.
const seleccion = confirm( ' Está seguro de borar el contenido');
console.log( seleccion);

// Para cuando el archivo alerts.js se ejecute desde la terminal para que no genere error y muestre
// su contenido. Se debe concatenar el resto de la fucniones para que se pueda ver el global.
console.log( global);

