import React from 'react'
import EN from '../../assets/EN.svg'

const Modes = props => {
    return (
        <div className="d-flex align-items-center align-self-end">
            <span className="material-icons mr-3" style={{cursor: 'pointer'}}>nights_stay</span>
            <img src={EN} alt="en" style={{cursor: 'pointer'}}/>
        </div>
    )
}

export default Modes