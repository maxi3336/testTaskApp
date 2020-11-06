export const componentUtils = {
    getNewName(name, state) {
        let newName = ''
        for(let i = 0; i < state.apps.searchText.length; i++)
            newName += name[i]
        return newName
    },
    getCharactersSearch(characters, state) {
        return characters.filter(el => state.apps.searchText === componentUtils.getNewName(el.name, state))
    },
    getCharactersStatus(characters, state) {
        return characters.filter(el => state.apps.statusFilter === el.status)
    },
    getCharactersSpecies(characters, state) {
        return characters.filter(el => state.apps.speciesFilter === el.species)
    },
    statusFiltersNames: ['All','Alive','Dead','unknown'],
    speciesFilterNames: ['All','Human','Alien','Mythological Creature', 'Animal', 'Cronenberg', 'Humanoid']
}