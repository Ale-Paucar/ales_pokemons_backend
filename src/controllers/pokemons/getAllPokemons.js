const axios = require("axios");
const getAllPokemonsInfoUtill = require('../../utils/getAllPokemonsInfo.utill.js');
const {POKEMON_API} = require('../../utils/apiRoutes.js');
const { Pokemon, Type } = require('../../db.js');
const getPokemonsErrorsHandlers = require('../../utils/getPokemonsErrorsHandlers.util.js');
const filterPokemons = require('../../utils/filterPokemonsFrom.util.js');
const orderPokemons = require('../../utils/orderPokemons.util.js');
const slicePokemons = require('../../utils/slicePokemons.util.js')


const getAllPokemons = async (req,res) => {
    try {
        const {filterBy,filter, order, limit, offset}= req.query;
        
        const error = await getPokemonsErrorsHandlers(filterBy,filter, order, limit, offset)

        const { data } = await axios.get(`${POKEMON_API}?limit=108`);
        
        const allPokemonsInfo = await getAllPokemonsInfoUtill(data);
        
        const pokeInDB = await Pokemon.findAll({
            include: [{
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }]
        });
        

        
        
        //filtrar 
        const pokemonsFiltered = await filterPokemons(allPokemonsInfo,pokeInDB,filterBy,filter);
        
        //ordenar
        const pokemonsSorted = await orderPokemons(pokemonsFiltered,order);
        
        //cortar
        const pokemonsSliced = await slicePokemons(pokemonsSorted,limit,offset);

        res.status(201).json(pokemonsSliced)
    } catch (error) {
        res.status(400).json( { err: error.message } )
    }
}



module.exports = { getAllPokemons }