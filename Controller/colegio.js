const {response} = require('express')
const Colegio = require('../Models/colegio')

const getColegio = async(req, res=response) => {
    let mensaje = ''
    try {
        const colegios = await Colegio.find()
        mensaje = colegios
    } catch (error) {
        mensaje = error
    }

   res.json({
        colegios:mensaje
    })
    
}

const postColegio = async(req, res = response) =>{

    
    
    const body = req.body 
    let mensaje = ''
    console.log(body)
    try {
        const colegio = new Colegio(body) 
        await colegio.save()
        mensaje = 'colegio registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        colegio:mensaje
    })
   
}

const putColegio = async(req, res = response) =>{
    const body = req.body 
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Colegio.findOneAndUpdate({_id:body._id}, {direccion:body.direccion, latitud:body.latitud,longitud:body.longitud,descripcion:body.descripcion})

            mensaje = 'Colegio modificado exitosamente'
        }
        else{
            await Colegio.updateMany({direccion:body.direccion,latitud:body.latitud,longitud:body.longitud,descripcion:body.descripcion})
            mensaje = 'Colegio modificado exitosamente'
        }

    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje:mensaje
    })
   
}

const deleteColegio = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Colegio.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
   
}

module.exports = {
    getColegio,
    postColegio,
    putColegio,
    deleteColegio
}