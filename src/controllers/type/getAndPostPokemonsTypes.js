const axios = require('axios');
const { POKEMON_TYPE_API } = require('../../utils/apiRoutes')
const filterPokeTypes = require('../../utils/filterPokeTypes.util');
const postTypesInDB = require('../../utils/postTypesInDB.util')


const getAndPostPokemonsTypes = async (req,res) => {
    try {
        const { data } = await axios.get(POKEMON_TYPE_API)

        const typesArray = await filterPokeTypes(data);

        const typesCreated = await postTypesInDB(typesArray);
        
        res.status(200).json(typesCreated)
    } catch (error) {
        res.status(400).json( { err: error.message } )
    }
} 

module.exports = {
    getAndPostPokemonsTypes,
}