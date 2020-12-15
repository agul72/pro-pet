import React from "react";
import s from './loader.module.css'

function Loader(props) {
    return (
        <div className={s.container}>
            {props.message}
            <div className={s.loader} />
        </div>

    )
}

export default Loader;
