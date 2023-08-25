
const findPokemonByName = require('../../utils/findPokemonByName.util.js');
const getPokemonByNameFromAPI = require('../../utils/getPokemonByName.util.js')

const getPokemonByName = async (req,res) => {
    try {
        const name = req.query.name;

        const pokemonFoud = await getPokemonByNameFromAPI(name);
        
        //const pokemonsMatches = await filterPokemonFoundByName(data)

        console.log(pokemonFoud);

        res.status(200).json(pokemonFoud)
        
    } catch (error) {
        res.status(400).json( { err: error.message } )
    }
}

module.exports = { getPokemonByName }