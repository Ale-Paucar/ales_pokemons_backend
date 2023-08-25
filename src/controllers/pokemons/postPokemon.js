const { Pokemon, Type } = require('../../db.js');
const nameExistsInAPI = require('../../utils/nameExistsInAPI.util.js')

const postPokemon = async (req,res) => {
    try {
        const {
            // not null:
            name,
            image,
            hp,
            attack,
            defense,
            // can be null:
            speed,
            height,
            weight,
            // array de id de tipos
            typesIds
        } = req.body

        if(!typesIds){
            throw Error('Types are required!')
        }

        const nameExist = await nameExistsInAPI(name);
        if(nameExist){
            throw Error(`${name} already exists in pokeAPI`)
        }

        const [pokemonCreated, created] = await Pokemon.findOrCreate({
            where : {
                name
            },
            defaults: {
                name,
                image,
                hp,
                attack,
                defense,
                speed, 
                height,
                weight
            }
        })

        await pokemonCreated.addTypes(typesIds);

        res.status(200).json(pokemonCreated)
    } catch (error) {
        res.status(400).json( { err: error.message } )
    }
}

module.exports = { postPokemon }