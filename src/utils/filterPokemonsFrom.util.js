const filterPokemons = (allPokemonsInfo,pokeInDB,filterBy,filter) => {
    if(!filterBy || !filter){
        return allPokemonsInfo.concat(pokeInDB);
    }
    
    if(filterBy === 'type'){
        const apiPokemonsFiltered = allPokemonsInfo.concat(pokeInDB).filter(poke => poke.types.some(type=>type.name === filter));
        return apiPokemonsFiltered;
    }

    if(filterBy === 'origin'){
        if( filter=== "api" ){
            return allPokemonsInfo;
        }
        if( filter === "db" ){
            return pokeInDB;
        }
    }
}

module.exports = filterPokemons;