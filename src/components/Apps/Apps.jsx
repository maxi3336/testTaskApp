import React from 'react'
import ContentContainer from "./Content/ContentContainer";
import SearchContainer from "./Search/SearchContainer";

const Apps = () => {
    return (
        <div className="ml-5">
            <SearchContainer />
            <ContentContainer />
        </div>
    )
}

export default Apps