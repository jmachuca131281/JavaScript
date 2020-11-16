
function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

// Se puede dejar la variable con un solo parametro ya que JavaScript lo reconoce. Ver ejemplo

function crearPersona2(nombre, apellido){
    return{
        nombre,
        apellido
    }
}

// La misma función pero de función de flecha

const crearPersona3 = (nombre3, apellido3) => ({nombre3, apellido3});

const persona = crearPersona('jose', 'machuca');
console.log(persona);

// Función flecha con argumentos

function imprimeArgumentos(){
    console.log(arguments);
}

// Para ver todos los argumentos se agregan los 3 punto, y si se quiere ver uno en particular se define en nombre como argumento

const imprimeArgumentos2 = (edad, ...args){
    console.log({edad, args});
}

imprimeArgumentos(10, true, false, 'fernando', 'hola');
imprimeArgumentos2(10, true, false, 'fernando', 'hola');


// Para imprimir los argumentos.

const impriemeArgumentos3 = (edad3, ...args3) =>{
    return args3;
}

const [casado, vivo, nombre, saludo] = impriemeArgumentos3(10, true, false, 'jose', 'machuca');
console.log({casado, vivo , nombre, saludo});

const {apellido: nuevoApellido} = crearPersona3('José', 'Machuca');
console.log({nuevoApellido});

const Tony = {
    // Llava --> Valor
   nombre: 'Tyny Stark',
   codeName: 'Ironman',
   vivo: 'false',
   edad: 40,
   trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }


const imprimePropiedades2 = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades2(Tony);
