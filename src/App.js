import React from 'react'
import Menu from "./components/Menu/Menu";
import {Route} from 'react-router-dom'
import Apps from "./components/Apps/Apps";
import OffersContainer from "./components/Offers/OffersContainer";

const App = () => {
    return (
        <div className="container-fluid p-5 d-flex border">
            <Menu />
            <div className="d-flex flex-column w-100">
                <Route path='/offers' component={OffersContainer}/>
                <Route path='/apps' component={Apps}/>
            </div>
        </div>
    );
}

export default App;
