import React from "react";
import s from './coming_soon_block.module.css'

function ComingSoonBlock() {

    return (
        <div className={s.container}>
            <div className={s.title}>
                Coming soon
            </div>
            <div className={s.plainText}>
                We are planing to open a new service,<br/> where your cats and dogs can find their love!
            </div>
            <div className={s.heart}>
                <div>
                    LOVE
                </div>
            </div>

        </div>
    )
}

export default ComingSoonBlock;
