import React from "react";
import s1 from './joining_comunity_text.module.css';
import {NavLink} from "react-router-dom";

function JoiningCommunityText() {

    return (
        <div className={s1.textStyle}>
            I’m okay, just want to <NavLink to={'/login'}>JOIN</NavLink> the pawsome community!
        </div>
    )
}

export default JoiningCommunityText;
