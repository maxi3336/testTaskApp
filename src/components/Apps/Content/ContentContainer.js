import Content from "./Content";
import {getAllCharacters, getCharacters, setCurrentPage} from "../../../redux/reducers/appsReducer";
import {connect} from "react-redux";
import AppItem from "./AppItem/AppItem";
import React from "react";
import {componentUtils} from "../../../utils/componentUtils/componentUtils";

const mapStateToProps = state => {
    let characters = []

    if(!state.apps.statusFilter && !state.apps.searchText && !state.apps.speciesFilter)
        characters = state.apps.charactersList.map(el => <AppItem name={el.name} status={el.status} species={el.species} image={el.image}/>)
    else characters = state.apps.allCharacters.map(el => {
        if(((componentUtils.getNewName(el.name, state) === state.apps.searchText) || !state.apps.searchText)
            && ((state.apps.statusFilter === el.status) || !state.apps.statusFilter)
            && ((state.apps.speciesFilter === el.species) || !state.apps.speciesFilter)) {
            return <AppItem name={el.name} status={el.status} species={el.species} image={el.image}/>
        }
    })

    return {
        characters: characters,
        currentPage: state.apps.currentPage,
        totalPage: state.apps.totalPage
    }
}

export default connect(mapStateToProps, {getCharacters, setCurrentPage, getAllCharacters})(Content)