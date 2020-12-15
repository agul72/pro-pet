import React from "react";
import s from './avatar.module.css'

function Avatar(props) {
    return (
        <div className={s.container}>
            <img src={props.userAvatar || '/usersPhoto/user-solid.svg'} alt={''} className={s.image}/>

        </div>
    )
}

export default Avatar;
