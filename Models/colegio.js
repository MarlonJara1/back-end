const {Schema, model} = require('mongoose') 

const colegioSChema = Schema({
    direccion: {
        type: String,
        required: [true, 'Direccion obligatoria']
    },

    latitud: {
        type: Number,
        required: [true, 'Latitud obligaoria']
        
    },

    longitud: {
        type: Number,
        required: [true, 'Longitud obligatoria']
        

    },
    fechaReporte: {
        type: Date,
        default: Date.now
    },

    descripcion: {
        type: String,
        required: [true, 'Descripcion obligatoria']
    }

})

module.exports = model('Colegio', colegioSChema)