import React from "react";

const Header = ({handleDarkSide})  => {
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleDarkSide((previousDarkside)=> !previousDarkside)} className="save">Dark Side</button>
        </div>
    )
}


export default Header