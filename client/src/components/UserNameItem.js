import React from "react";
import s from './user.module.css'

function UserNameItem(props) {
    const [firstName, lastName] = props.userName.split(' ');
    return (
        <div className={s[props.type]}>
            <div className={s.item}>{firstName}</div>
            <div className={s.item}>{lastName}</div>
        </div>
    )
}

export default UserNameItem;
