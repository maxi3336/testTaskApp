import {useAPI} from "../../api/api";

const SET_CHARACTERS = 'test/apps/SET-CHARACTERS'
const SET_ALL_CHARACTERS = 'test/apps/SET-ALL-CHARACTERS'
const SET_CURRENT_PAGE = 'test/apps/SET-CURRENT-PAGE'
const UPDATE_SEARCH_TEXT = 'test/apps/UPDATE-SEARCH-TEXT'
const SET_SPECIES_FILTER = 'test/apps/SET-SPECIES-FILTER'
const SET_STATUS_FILTER = 'test/apps/SET-STATUS-FILTER'

const initialState = {
    charactersList: [],
    allCharacters: [],
    currentPage: 1,
    totalPage: 20,
    searchText: '',
    speciesFilter: '',
    statusFilter: ''
}

const appsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {
                ...state,
                charactersList: action.characters
            }
        }
        case SET_ALL_CHARACTERS: {
            return {
                ...state,
                allCharacters: action.characters
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.text
            }
        }
        case SET_SPECIES_FILTER: return {...state, speciesFilter: action.species}
        case SET_STATUS_FILTER: return {...state, statusFilter: action.status}
        default: return state
    }
}

const setCharacters = characters => ({type: SET_CHARACTERS, characters})
const setAllCharacters = characters => ({type: SET_ALL_CHARACTERS, characters})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const updateSearchText = text => ({type: UPDATE_SEARCH_TEXT, text})
export const setSpeciesFilter = species => ({type: SET_SPECIES_FILTER, species})
export const setStatusFilter = status => ({type: SET_STATUS_FILTER, status})

export const getCharacters = (currentPage=1) => async dispatch => {
    let response = await useAPI.getCharacters(currentPage)
    dispatch(setCharacters(response.data.results))
}

export const getAllCharacters = () => async dispatch => {
    let characters = []
    for(let i = 1; i <= 20; i++){
        let response = await useAPI.getCharacters(i)
        characters.push(...response.data.results)
    }
    dispatch(setAllCharacters(characters))
}

export default appsReducer