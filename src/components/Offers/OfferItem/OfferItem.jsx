import React, {useState} from 'react'
import {connect} from "react-redux";
import {deleteNetwork, deleteOffer} from "../../../redux/reducers/offersReducer";
import {reduxForm, Field} from "redux-form";

const OfferItem = props => {

    const deleteElement = () => {
        if(props.type === 'network')
            props.deleteNetwork(props.id)
        if(props.type === 'offer')
            props.deleteOffer(props.id)
    }

    return (
        <form className="row w-100 pb-2 border-bottom mb-3 position-relative" style={{fontSize: 14}}>
            <div className="col-3">
                <span>{props.name}</span>
            </div>
            <div className="col-4 text-truncate">
                <span>{props.second}</span>
            </div>
            <div className="col-3 text-truncate">
                <span>{props.third}</span>
            </div>
            <div className="col-2">
                <span>{props.date}</span>
            </div>
            <span className="material-icons position-absolute"
                  style={{cursor: 'pointer', fontSize: 18, right: -18}} onClick={deleteElement}>delete</span>
        </form>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {
        ...ownProps
    }
}

export default reduxForm({form: 'changeElement'})(connect(mapStateToProps, {deleteOffer, deleteNetwork})(OfferItem))