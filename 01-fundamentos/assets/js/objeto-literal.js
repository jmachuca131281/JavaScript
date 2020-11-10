// Cuando la asignación tiene "{}" es un objeto literal

// Primer objeto literal.
let personaje = {
    // Llava --> Valor
   nombre: 'Tyny Stark',
   codeName: 'Ironman',
   vivo: 'false',
   edad: 40,
   coords: {
       lat: 34.034,
       lng: -118.70
   },
   trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
   direccion:{
       zip: '10293847',
       ubicacion: 'Malibu, california'
   }
};

console.log('Nombre', personaje.nombre);
console.log(personaje);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Coors', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo0';
console.log('Vivo', personaje[x]);

// Mas detalles

// Para borrar un elemento del objeto se utiliza la palabra reservada delete
delete personaje.edad;
console.log(personaje);

// Agregar un valor al objeto

personaje.casado = true;

// Trabajar un objeto como si fuera un objeto.

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Si se desea que el objeto no pueda ser modificado se agrega la palabra reservada "const" al objeto.
Object.freeze(personaje);
personaje.dinero = 10000000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Locombia';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);



