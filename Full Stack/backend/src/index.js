// Creamos el servidor y configuramos el servidor
const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const bodyparser = require ('body-parser');

const app = express();
require('./database')

app.set('Port', 4000);

app.use(morgan('dev'));

// app.use(bodyparser.urlencoded({extended:true}));

// app.use(bodyparser.json())

// Rutas
app.use('/api/',require('./routes/prueba.route'))

// Start server
app.listen(app.get('Port'),() =>{
    console.log('Escuchando el puerto', app.get('Port'));
})