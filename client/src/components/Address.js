import React from "react";
import s from './address.module.css'

function Address() {
    return (
        <div>
            <div className={s.container}>
                <div className={[s.socialIcon, s.facebookIcon].join(' ')}></div>
                <div className={[s.socialIcon, s.instagramIcon].join(' ')}></div>
            </div>
            <div className={s.address}>
                1600 Amphitheatre Pkwy<br/> Mountain View, CA 94043, USA
            </div>
        </div>
    )
}

export default Address;
