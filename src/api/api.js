import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})

export const useAPI = {
    getCharacters (currentPage) {
        return instance.get(`character/?page=${currentPage}`)
    }
}