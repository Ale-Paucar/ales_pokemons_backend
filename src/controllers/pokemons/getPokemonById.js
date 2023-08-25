const axios = require('axios');
const {POKEMON_API} = require('../../utils/apiRoutes.js')
const filterPokemonProps = require('../../utils/filterPokemonProps.util.js')

const getPokemonById = async (req, res) => {
    try {
        const idPokemon = req.params.idPokemon;

        const { data } = await axios.get(`${POKEMON_API}/${idPokemon}`);

        const pokeInfo = await filterPokemonProps(data)
        
        res.status(201).json(pokeInfo)        
    } catch (error) {
        res.status(400).json( { err: error.message } ) 
    }
}



module.exports = { getPokemonById }