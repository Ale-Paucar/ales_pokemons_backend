const { Router } = require('express');

const { 
    getAndPostPokemonsTypes 
} = require('../controllers/types.controller')

const typesRoutes = Router();

typesRoutes.get('/', getAndPostPokemonsTypes)

module.exports = typesRoutes;