import React from "react";
import s from './greeting.module.css'

function Greeting() {
    return (
        <div className={s.container}>
            <p>Welcome to your<br/>
            <span>pawfessional</span><br/>
                community</p>
        </div>
    )
}

export default Greeting;
