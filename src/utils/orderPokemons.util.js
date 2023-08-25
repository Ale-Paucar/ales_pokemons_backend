const orderPokemons = (pokemonsFiltered,order) => {
    const orderFunctions = {
        "AZ": (a, b) => a.name.localeCompare(b.name),
        "ZA": (a, b) => b.name.localeCompare(a.name),
        "attackAsc": (a, b) => a.attack - b.attack,
        "attackDesc": (a, b) => b.attack - a.attack,
        "defenseAsc": (a, b) => a.defense - b.defense,
        "defenseDesc": (a, b) => b.defense - a.defense,
    };

    if (!order) {
        return pokemonsFiltered;
    }

    return [...pokemonsFiltered].sort(orderFunctions[order]);

}

module.exports = orderPokemons;