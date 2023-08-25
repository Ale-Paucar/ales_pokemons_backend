const { Type } = require('../db')

const getPokemonsErrorsHandlers = async (filterBy,filter, order, limit, offset) => {
    const filtersByAllowed = ["type","origin"];
    const pokeTypes = await Type.findAll();
    const filterAllowed = pokeTypes.map(type => type.name).concat(["api","db"])
    const ordersAllowed = ["AZ","ZA","attackAsc","attackDesc","defenseAsc","defenseDesc"];
    // 
    
    // if (parseFloat(offset) > pages) {
    //     throw Error(`Offset should be less than ${pages}`);
    // }
    if(Array.isArray(filter)){
        throw Error('only one type of pokemon is allowed')
    }

    if(filterBy && !filtersByAllowed.includes(filterBy)){
        throw Error(`${filterBy} is not an allowed filter type`)
    }

    if(filter && !filterAllowed.includes(filter)){
        throw Error(`${filter} is not an allowed filter`)
    }


    
    if(order && !ordersAllowed.includes(order)){
        throw Error(`${order} is not an allowed order type`)
    }
}

module.exports = getPokemonsErrorsHandlers;