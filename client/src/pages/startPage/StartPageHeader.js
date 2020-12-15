import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import logo from '../../img/Logo_white.svg'

import './start_page_header.css'

function StartPageHeader(props) {
    return (
        <div className={'greenHeader'}>
            <Logo width={'145px'} logoUrl={logo}/>
            <Button />
        </div>
    )
}

export default StartPageHeader;
