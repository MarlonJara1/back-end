const express = require('express')
const cors  = require('cors');
const bodyParser = require('body-parser')

const dbConection = require('../Database/config')

class server{
    
    constructor () {
        this.app = express()
        this.port = process.env.PORT
        this.colegioPath = '/api/colegio' 
        this.middlewares()
        this.routes()
        this.dbConectar()

    }

    middlewares() 
    {
        this.app.use( cors() );
        this.app.use(bodyParser.json()) 

    }

    routes()
    {
        this.app.use(this.colegioPath, require('../Routes/colegios'))
    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}
module.exports = server