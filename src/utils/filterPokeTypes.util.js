const  filterPokeTypes = (pokeData) => {
    const { results } = pokeData;
    if(!results) throw Error('Not pokemons types found');
    const typesArray = results.map(type => type.name)
    return typesArray;
}

module.exports = filterPokeTypes;