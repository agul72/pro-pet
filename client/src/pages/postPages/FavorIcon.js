import React from "react";
import s from './favor_icon.module.css'

function FavorIcon(props) {

    return (
        <div className={props.favor ? s.favor : s.nonFavor}>
        </div>
    )
}

export default FavorIcon;
