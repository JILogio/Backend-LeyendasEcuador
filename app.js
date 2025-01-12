'use strict';

// Modulos node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
require('dotenv').config();

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var routes = require('./routes/routes');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});

// Añadir prefijos a rutas / Cargar rutas
app.use('/api',routes);

// Rutas Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Exportar modulo (fichero actual)
module.exports = app;
