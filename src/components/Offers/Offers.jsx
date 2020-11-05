import React from 'react'
import promo from '../../assets/Rectangle 46.svg'
import styles from "../../styles/styles";
import 'react-dropdown/style.css'
import OfferCreatingForm from "./OfferForms/OfferCreatingForm";
import NetworkCreatingForm from "./OfferForms/NetworkCreatingForm";

const Offers = props => {
    const onOfferSubmit = data => {
        let networkId = null
        let networkName = null
        if (data.network) {
            networkId = data.network.split(' ')[1]
            networkName = data.network.split(' ')[0]
        }
        console.log(data)
        props.addOffer(networkId, data.offerName, data.offerUrl, networkName)
    }
    const onNetworkSubmit = data => {
        props.addNetwork(data.networkName, data.postbackUrl)
    }

    return (
        <div className="ml-5 mt-5">

            <div className="row mb-3">
                <div className="col p-3 mr-3" style={styles.offers.elementBackground}>
                    <img src={promo} alt="promo"/>
                </div>
                <OfferCreatingForm networks={props.networks} onSubmit={onOfferSubmit}/>
            </div>

            <div className="row">
                <div className="col">
                    <NetworkCreatingForm onSubmit={onNetworkSubmit}/>
                    <div className="row mr-3 p-4" style={styles.offers.elementBackground}>
                        <div className="row w-100 mb-4" style={{fontSize: 14}}>
                            <div className="col-2">
                                <span>Name/ID</span>
                            </div>
                            <div className="col-4">
                                <span>Postback URL</span>
                            </div>
                            <div className="col-3">
                                <span>Offer URL template</span>
                            </div>
                            <div className="col-3">
                                <span>Date</span>
                            </div>
                        </div>
                        <div style={{overflow: 'auto', height: 300}}>
                            {props.networkList}
                        </div>
                    </div>
                </div>
                <div className="col p-4" style={styles.offers.elementBackground}>
                    <div className="row w-100 mb-4" style={{fontSize: 14}}>
                        <div className="col-2">
                            <span>Name/ID</span>
                        </div>
                        <div className="col-4">
                            <span>Offer URL</span>
                        </div>
                        <div className="col-3">
                            <span>Network</span>
                        </div>
                        <div className="col-3">
                            <span>Date</span>
                        </div>
                    </div>
                    <div style={{overflow: 'auto', height: 500}}>
                        {props.offersList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers