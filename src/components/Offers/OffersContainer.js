import OfferItem from "./OfferItem/OfferItem";
import React from "react";
import Offers from "./Offers";
import {connect} from "react-redux";
import {addNetwork, addOffer, editNetwork} from "../../redux/reducers/offersReducer";

const mapStateToProps = state => {
    const networkList = state.offers.networkList.map(el => <OfferItem id={el.id} name={el.name} second={el.postbackUrl} third={el.offerUrl} date={el.date}/>)
    const offersList = state.offers.offersList.map(el => <OfferItem id={el.id} name={el.name} second={el.offerUrl} third={el.network} date={el.date}/>)
    const networks = state.offers.networkList.map(el => <option value={el.name + ' ' + el.id}>{el.name}</option>)

    return {
        networkList: networkList,
        offersList: offersList,
        networks: networks
    }
}

export default connect(mapStateToProps, {addNetwork, addOffer})(Offers)