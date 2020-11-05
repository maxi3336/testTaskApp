import {v4} from 'uuid'

const ADD_NETWORK = 'task/offers/ADD-NETWORK'
const ADD_OFFER = 'task/offers/ADD-OFFER'
const EDIT_NETWORK = 'task/offers/EDIT-NETWORK'

let initialState = {
    offersList: [],
    networkList: []
}

const getDate = () => {
    let date = new Date()
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
}

const offersReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NETWORK: {
            return {
                ...state,
                networkList: [...state.networkList, {
                    id: v4(),
                    name: action.name,
                    postbackUrl: action.url,
                    offerUrl: '{offer_url}?clickid={clickid}',
                    date: getDate()
                }]
            }
        }
        case ADD_OFFER: {
            return {
                ...state,
                offersList: [...state.offersList, {
                    id: v4(),
                    name: action.name,
                    offerUrl: action.url,
                    network: action.network,
                    date: getDate()
                }],
                networkList: state.networkList.map(el => {
                    if(el.id === action.networkId)
                        el.offerUrl = action.url
                    return el
                })
            }
        }
        case EDIT_NETWORK: {
            return {
                ...state,
                networkList: state.networkList.map(el => {
                    if(el.id === action.id) {
                        el.name = action.name
                        el.postbackUrl = action.url
                    }
                })
            }
        }
        default: return state
    }
}

export const addNetwork = (name, url) => ({type: ADD_NETWORK, name, url})
export const addOffer = (networkId, name, url, network) => ({type: ADD_OFFER, networkId, name, url, network})
export const editNetwork = (id, name, url) => ({type: EDIT_NETWORK, id, name, url})

export default offersReducer