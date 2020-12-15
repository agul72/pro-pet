import React from "react";
import s from './time.module.css'

function Time(props) {
    return (
        <div className={s.time}>
            {props.time}
        </div>
    )
}

export default Time;
