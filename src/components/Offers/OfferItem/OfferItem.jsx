import React from 'react'

const OfferItem = props => {
    return (
        <div className="row w-100 pb-3 border-bottom mb-3 position-relative" style={{fontSize: 12}}>
            <div className="col-2">
                <span>{props.name}</span>
            </div>
            <div className="col-4 text-truncate">
                <span>{props.second}</span>
            </div>
            <div className="col-3 text-truncate">
                <span>{props.third}</span>
            </div>
            <div className="col-3">
                <span>{props.date}</span>
            </div>
            <span className="material-icons position-absolute" style={{right: 0}}>create</span>
        </div>
    )
}

export default OfferItem