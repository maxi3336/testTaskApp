import React from 'react'
import ContentContainer from "./Content/ContentContainer";
import SearchContainer from "./Search/SearchContainer";

const Apps = () => {
    return (
        <div className="mt-5 ml-5">
            <SearchContainer />
            <ContentContainer />
        </div>
    )
}

export default Apps