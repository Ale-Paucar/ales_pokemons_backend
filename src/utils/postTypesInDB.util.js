const { Type } = require('../db');

const postTypesInDB =  async (typesArray) => {
    const typesCreated = await Promise.all(typesArray.map( async type => {
        const [typeCreated,created] = await Type.findOrCreate({
            where: {
                name:type
            },
            defaults: {
                name: type
            },
        })
        return typeCreated
    }))
    console.log(typesCreated);
    return typesCreated
}

module.exports = postTypesInDB;