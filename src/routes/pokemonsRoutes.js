const { Router } = require('express');

const {
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
    postPokemon
} = require('../controllers/pokemon.controller')

const pokemonsRoutes = Router();

pokemonsRoutes.get('/',getAllPokemons)

pokemonsRoutes.get('/search',getPokemonByName)

pokemonsRoutes.get('/:idPokemon',getPokemonById)

pokemonsRoutes.post('/',postPokemon)

module.exports = pokemonsRoutes;