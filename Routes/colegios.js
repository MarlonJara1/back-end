const {Router} = require('express')

const route = Router()

const {getColegio, postColegio, putColegio, deleteColegio} = require('../Controller/colegio')

route.get('/', getColegio)

route.post('/', postColegio)

route.put('/', putColegio)

route.delete('/', deleteColegio)


module.exports = route   