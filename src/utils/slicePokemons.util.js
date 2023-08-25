const slicePokemons = (pokemonsSorted,limit,offset) => {
    
    if (limit < 9 || limit > 15) {
        throw new Error('Limit must be between 9 and 15');
    }

    const numberOffset = parseInt(offset);
    const numberLimit = parseInt(limit)
    
    //const pages = Math.ceil(pokemonsSorted.length/parseFloat(limit));
    
    //if(offset > pages) throw Error(`offset sholud be less than ${pages}`) ;
    if(numberOffset >= pokemonsSorted.length) throw Error(`offset sholud be less than ${pokemonsSorted.length}`) ;
    
    if(!limit && !offset) return pokemonsSorted ;
    
    if(!limit && offset) return pokemonsSorted.slice(numberOffset);

    if(!offset && limit) return pokemonsSorted.slice(0,numberLimit);

    return pokemonsSorted.slice(numberOffset,numberOffset+numberLimit)

}

module.exports = slicePokemons;