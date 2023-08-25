const axios = require('axios')

const getAllPokemonsInfoUtil = async (pokemonsJSON) => {
    const { results } = pokemonsJSON;

    let pokemonDataPromises = await Promise.all(results.map(poke => axios.get(poke.url).then(response => response.data)));
    
    let allPokeData = pokemonDataPromises.map(poke => ({
        id: poke.id,
        name: poke.name,
        image: poke.sprites.other['official-artwork'].front_default,
        hp: poke.stats.find(stat =>stat.stat.name === "hp").base_stat,
        attack: poke.stats.find(stat =>stat.stat.name === "attack").base_stat,
        defense: poke.stats.find(stat =>stat.stat.name === "defense").base_stat,
        speed: poke.stats.find(stat =>stat.stat.name === "speed").base_stat,
        height: poke.height,
        weight: poke.weight,
        types: poke.types.map(type=>({"name": type.type.name}))
    }))


    return allPokeData;
}

module.exports = getAllPokemonsInfoUtil;