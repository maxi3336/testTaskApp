import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import offersReducer from "./reducers/offersReducer";

const store = createStore(combineReducers({
    offers: offersReducer,
    form: formReducer
}))

window.store = store

export default store