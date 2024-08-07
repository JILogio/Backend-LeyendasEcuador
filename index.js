'use strict'

const { MongoClient, ServerApiVersion } = require('mongodb');

var app = require('./app')

const client = new MongoClient(process.env.Mongo_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run(){
    try{
        await client.connect()
        console.log('Conectado a la Base de Datos')

        app.listen(process.env.PORT , () => {
            console.log('Servidor corriendo en http://localhost:'+process.env.PORT);
        })
    } catch (error){
        console.error('Error en la conexion: ', error)
    } finally{
        await client.close()
    }
}

run()