const filterPokemonProps = (pokeAPIData) => {
    if(!pokeAPIData) throw Error('Pokemon not found')
    const pokeData = {
        id: pokeAPIData.id,
        name: pokeAPIData.name,
        image: pokeAPIData.sprites.other['official-artwork'].front_default,
        types: pokeAPIData.types.map(type=>type.type.name),
        hp: pokeAPIData.stats.find(stat =>stat.stat.name === "hp").base_stat,
        attack: pokeAPIData.stats.find(stat =>stat.stat.name === "attack").base_stat,
        defense: pokeAPIData.stats.find(stat =>stat.stat.name === "defense").base_stat,
        speed: pokeAPIData.stats.find(stat =>stat.stat.name === "speed").base_stat,
        height: pokeAPIData.height,
        weight: pokeAPIData.weight,
    }

    return pokeData;
}

module.exports = filterPokemonProps;