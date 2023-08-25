const axios = require('axios');
const { POKEMON_API } = require('./apiRoutes.js')


const nameExistsInAPI = async (name) => {
    try {
        const { data } = await axios.get(`${POKEMON_API}/${name}`)
        // si no hay error axios encontro el nombre en la api
        return true
    } catch (error) {
        if(error instanceof axios.AxiosError && error.response.status === 404){
            //si no encontró retorna false
            return false;
        }
        throw error;
    }
    
    
    
}

module.exports = nameExistsInAPI;