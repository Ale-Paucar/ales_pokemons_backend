const axios = require('axios');
const { POKEMON_API } = require('./apiRoutes.js');

const getPokemonByNameFromAPI = async (pokeName) => {
    try {
        const { data } = await axios.get(`${POKEMON_API}/${pokeName}`)
    
        return {
            id: data.id,
            name: data.name,
        }
    } catch (error) {
        if(error instanceof axios.AxiosError){
            throw Error(`The pokemon ${pokeName} was not found in the pokeAPI`);
        } else{
            throw Error(error.message)
        }
    }

}

module.exports = getPokemonByNameFromAPI;