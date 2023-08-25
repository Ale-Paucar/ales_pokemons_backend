const { getAllPokemons } = require('./pokemons/getAllPokemons');
const { getPokemonById } = require('./pokemons/getPokemonById');
const { getPokemonByName } = require('./pokemons/getPokemonByName');
const { postPokemon } = require('./pokemons/postPokemon');


module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    postPokemon
}
