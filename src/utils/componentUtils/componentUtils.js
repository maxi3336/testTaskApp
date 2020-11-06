export const componentUtils = {
    getNewName(name, state) {
        let newName = ''
        for(let i = 0; i < state.apps.searchText.length; i++)
            newName += name[i]
        return newName
    },
    statusFiltersNames: ['All','Alive','Dead','unknown'],
    speciesFilterNames: ['All','Human','Alien','Mythological Creature', 'Animal', 'Cronenberg', 'Humanoid']
}