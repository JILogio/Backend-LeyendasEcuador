'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3900;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Conectado a la base de datos');

    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:' + port);
    }); // Incia el server
})
.catch(err => {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1); // Termina el proceso con un error
});
