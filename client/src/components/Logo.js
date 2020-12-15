import React from "react";

function Logo(props) {
    const style = {
        width: props.width,
        height: '100%',
        background: 'url('+ props.logoUrl + ') no-repeat center center',
        backgroundSize: 'contain',

    }
    return(
        <div style={style}></div>
    )
}

export default Logo;
