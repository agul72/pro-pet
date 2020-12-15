import React from "react";
import Greeting from "./Greeting";
import LostFoundButtonsBlock from "./LostFoundButtonsBlock";
import JoiningCommunityText from "./JoiningCommunityText";
import PuppyImage from "./PuppyImage";

import s from './wellcome.module.css'


function Welcome() {
    return (
        <div className={s.container}>
            <div className={s.leftSide}>
                <Greeting />
                <LostFoundButtonsBlock />
                <JoiningCommunityText />
            </div>
            <div >
                <PuppyImage />
            </div>
        </div>
    )
}

export default Welcome;
